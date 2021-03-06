export const DeveloperViewComponent = {
  templateUrl: 'chpl.organizations/developers/developer/view.html',
  bindings: {
    developer: '<',
    directReviews: '<',
  },
  controller: class DeveloperViewComponent {
    constructor ($log, $scope, $state, $stateParams, authService, networkService, toaster) {
      'ngInject';
      this.$log = $log;
      this.$scope = $scope;
      this.$state = $state;
      this.$stateParams = $stateParams;
      this.canManageDeveloper = authService.canManageDeveloper;
      this.hasAnyRole = authService.hasAnyRole;
      this.networkService = networkService;
      this.toaster = toaster;
      this.backup = {};
      this.drStatus = 'pending';
      this.splitEdit = true;
      this.movingProducts = [];
      this.activeAcbs = [];
      this.roles = ['ROLE_DEVELOPER'];
    }

    $onInit () {
      let that = this;
      if (this.hasAnyRole(['ROLE_ADMIN', 'ROLE_ONC', 'ROLE_ACB', 'ROLE_DEVELOPER']) && this.action !== 'editProduct' && this.action !== 'editVersion') {
        this.loadData();
      }
      this.loggedIn = this.$scope.$on('loggedIn', () => that.loadData());
      this.networkService.getSearchOptions()
        .then(options => that.searchOptions = options);
      if (this.$stateParams.productId) {
        this.productId = this.$stateParams.productId;
      }
      if (this.$stateParams.versionId) {
        this.versionId = this.$stateParams.versionId;
      }
      this.networkService.getDirectReviews(this.developer.developerId)
        .then(results => {
          that.drStatus = 'success';
          that.directReviews = results;
        }, () => that.drStatus = 'error');
    }

    $onChanges (changes) {
      if (changes.developer) {
        this.developer = angular.copy(changes.developer.currentValue);
        this.backup.developer = angular.copy(this.developer);
      }
      if (changes.directReviews) {
        this.directReviews = angular.copy(changes.directReviews.currentValue);
      }
    }

    $onDestroy () {
      this.loggedIn();
    }

    can (action) {
      if (!this.canManageDeveloper(this.developer)) { return false; } // basic authentication
      if (action === 'manageTracking' && !this.hasAnyRole(['ROLE_DEVELOPER'])) { return false; } // only DEVELOPER can manage tracking
      if (action === 'split-developer' && this.developer.products.length < 2) { return false; } // cannot split developer without at least two products
      if (this.hasAnyRole(['ROLE_ADMIN', 'ROLE_ONC'])) { return true; } // can do everything
      if (action === 'merge') { return false; } // if not above roles, can't merge
      if (action === 'split-developer') { return this.developer.status.status === 'Active' && this.hasAnyRole(['ROLE_ACB']); } // ACB can split
      return this.developer.status.status === 'Active' && this.hasAnyRole(['ROLE_ACB', 'ROLE_DEVELOPER']); // must be active
    }

    cancel () {
      this.developer = angular.copy(this.backup.developer);
      this.$state.go('organizations.developers.developer', {
        developerId: this.developer.developerId,
        action: undefined,
        productId: undefined,
        versionId: undefined,
      }, {reload: true});
    }

    closeConfirmation () {
      this.action = undefined;
      if (this.$state.$current.name === 'organizations.developers.developer.edit') {
        this.$state.go('^', undefined, {reload: true});
      }
    }

    loadData () {
      let that = this;
      this.networkService.getAcbs(true).then(response => {
        that.allowedAcbs = response.acbs;
      });
      if (this.hasAnyRole(['ROLE_ADMIN', 'ROLE_ONC', 'ROLE_ACB', 'ROLE_DEVELOPER']) && this.$stateParams.developerId) {
        this.networkService.getUsersAtDeveloper(this.$stateParams.developerId).then(response => that.users = response.users);
      }
      if (this.hasAnyRole(['ROLE_DEVELOPER']) && this.$stateParams.developerId) {
        this.networkService.getChangeRequests().then(response => that.changeRequests = response);
        this.networkService.getChangeRequestTypes().then(response => that.changeRequestTypes = response);
        this.networkService.getChangeRequestStatusTypes().then(response => that.changeRequestStatusTypes = response);
      }
    }

    takeAction (action) {
      this.$state.go('organizations.developers.developer.' + action);
    }

    takeCrAction (action, data) {
      switch (action) {
      case 'cancel':
        this.action = undefined;
        break;
      case 'save':
        this.updateRequest(data);
        break;
                //no default
      }
    }

    saveRequest (data) {
      let that = this;
      let request = {
        developer: this.developer,
        details: data,
      };
      this.networkService.submitChangeRequest(request)
        .then(that.handleResponse.bind(that), that.handleError.bind(that));
    }

    updateRequest (data) {
      let that = this;
      if (data.currentStatus && data.currentStatus.changeRequestStatusType && data.currentStatus.changeRequestStatusType.name === 'Cancelled by Requester') {
        this.isWithdrawing = true;
      } else {
        this.isWithdrawing = false;
      }
      this.networkService.updateChangeRequest(data)
        .then(that.handleResponse.bind(that), that.handleError.bind(that));
    }

    handleResponse () {
      let confirmationText = 'The submission has been completed successfully. It will be reviewed by an ONC-ACB or ONC. Once the submission has been approved, it will be displayed on the CHPL.';
      if (this.isWithdrawing) {
        confirmationText = 'Your change request has been successfully withdrawn.';
      }
      this.networkService.getChangeRequests().then(response => this.changeRequests = response);
      this.action = 'confirmation';
      this.confirmationText = confirmationText;
      this.isWithdrawing = false;
    }

    handleError (error) {
      let messages;
      let type = 'error';
      let title = 'Error in submission';
      if (error && error.data && error.data.error
                && error.data.error === 'No data was changed.') {
        messages = ['Cannot "Submit" a change request when no changes have been made.'];
        type = 'info';
        title = 'Please check your input';
      } else {
        messages = error.data.errorMessages ? error.data.errorMessages : [];
      }
      let body = messages.length > 0 ? 'Message' + (messages.length > 1 ? 's' : '') + ':<ul>' + messages.map(e => '<li>' + e + '</li>').join('') + '</ul>'
        : 'An unexpected error occurred. Please try again or contact ONC for support';
      this.toaster.pop({
        type: type,
        title: title,
        body: body,
        bodyOutputType: 'trustedHtml',
      });
    }

    takeUserAction (action, data) {
      let that = this;
      switch (action) {
      case 'edit':
        this.action = 'focusUsers';
        break;
      case 'cancel':
        this.action = undefined;
        break;
      case 'delete':
        this.action = undefined;
        this.networkService.removeUserFromDeveloper(data, this.$stateParams.developerId)
          .then(() => that.networkService.getUsersAtDeveloper(that.$stateParams.developerId).then(response => that.users = response.users));
        break;
      case 'invite':
        this.action = undefined;
        this.networkService.inviteUser({
          role: data.role,
          emailAddress: data.email,
          permissionObjectId: this.$stateParams.developerId,
        }).then(() => that.toaster.pop({
          type: 'success',
          title: 'Email sent',
          body: 'Email sent successfully to ' + data.email,
        }));
        break;
      case 'refresh':
        this.action = undefined;
        this.networkService.getUsersAtDeveloper(this.$stateParams.developerId)
          .then(response => that.users = response.users);
        break;
      case 'impersonate':
        this.action = undefined;
        this.$state.reload();
        break;
                //no default
      }
    }
  },
};

angular.module('chpl.organizations')
  .component('chplDeveloperView', DeveloperViewComponent);

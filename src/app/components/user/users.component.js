export const UsersComponent = {
  templateUrl: 'chpl.components/user/users.html',
  bindings: {
    columnCount: '@',
    users: '<',
    roles: '<',
    takeAction: '&',
  },
  controller: class UsersComponent {
    constructor ($analytics, $anchorScroll, $log, $rootScope, $scope, authService, networkService, utilService) {
      'ngInject';
      this.$analytics = $analytics;
      this.$anchorScroll = $anchorScroll;
      this.$log = $log;
      this.$rootScope = $rootScope;
      this.$scope = $scope;
      this.authService = authService;
      this.canImpersonate = authService.canImpersonate;
      this.networkService = networkService;
      this.range = utilService.range;
      this.rangeCol = utilService.rangeCol;
    }

    $onInit () {
      this.columnCount = this.columnCount || 2;
      this.act = this.act.bind(this);
    }

    $onChanges (changes) {
      if (changes.users.currentValue) {
        this.users = angular.copy(changes.users.currentValue);
        this.filteredUsers = angular.copy(this.users);
        this.filter();
      }
      if (changes.roles && changes.roles.currentValue) {
        this.roles = angular.copy(changes.roles.currentValue);
        if (this.roles && this.roles.length === 1) {
          this.newRole = this.roles[0];
        }
      }
    }

    act (action, data, react) {
      let that = this;
      this.errors = undefined;
      switch (action) {
      case 'delete':
        this.takeAction({action: 'delete', data: data});
        this.activeUser = undefined;
        break;
      case 'edit':
        this.takeAction({action: 'edit'});
        this.activeUser = data;
        this.$anchorScroll();
        break;
      case 'save':
        this.networkService.updateUser(data)
          .then(() => {
            that.takeAction({action: 'refresh'});
            that.activeUser = undefined;
          }, error => {
            if (error.data.error) {
              that.errors = [error.data.error];
            } else if (error.data?.errorMessages?.length > 0) {
              that.errors = error.data.errorMessages;
            }
          });
        break;
      case 'cancel':
        this.activeUser = undefined;
        this.takeAction({action: 'cancel'});
        break;
      case 'impersonate':
        this.networkService.impersonateUser(data)
          .then(token => {
            that.$analytics.eventTrack('Impersonate User', { category: 'Authentication' });
            that.authService.saveToken(token.token);
            that.networkService.getUserById(that.authService.getUserId())
              .then(user => {
                that.authService.saveCurrentUser(user);
                that.$rootScope.$broadcast('impersonating');
                that.takeAction({action: 'impersonate'});
              });
          });
        break;
                //no default
      }
      if (react) {
        this.$scope.$apply();
      }
    }

    inviteUser () {
      let invitation = {
        email: this.inviteEmail,
        role: this.newRole,
      };
      this.takeAction({action: 'invite', data: invitation});
      this.inviteEmail = undefined;
      if (this.roles && this.roles.length === 1) {
        this.newRole = this.roles[0];
      } else {
        this.newRole = undefined;
      }
      this.form.$setPristine();
      this.form.$setUntouched();
      this.showFormErrors = false;
      this.invitationOpen = false;
    }

    filter () {
      this.filteredUsers = this.users.filter(user => {
        let found = false;
        if (this.searchText) {
          let regex = new RegExp(this.searchText, 'i');
          found = found || regex.test(user.fullName);
          found = found || regex.test(user.friendlyName);
          found = found || regex.test(user.title);
          found = found || regex.test(user.email);
          found = found || regex.test(user.subjectName);
        } else {
          found = true;
        }
        return found;
      }).sort((a, b) => a.fullName < b.fullName ? -1 : a.fullName > b.fullName ? 1 : 0);
    }
  },
};

angular.module('chpl.components')
  .component('chplUsers', UsersComponent);

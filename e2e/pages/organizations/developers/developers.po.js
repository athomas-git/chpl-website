const elements = {
  developersSelect: '#developer-select',
  developersButton: '#developer-button',
  directReviewsHeader: 'h2=Direct Review Activities',
  productsHeader: 'h2=Products',
  editProductsHeader: 'h2=Edit Product Details',
  editVersionHeader: 'h2=Edit Version Details',
  products: '.products__product',
  editProductName: '#product-name',
  editProductCode: '#product-code',
  activeVersion: '#active-version',
  editVersionName: '#version-name',
  editVersionCode: '#version-code',
  splitVersionVersion: '#version-version',
  editDeveloper: 'button#developer-component-edit',
  versionName: '#version-name',
  errorMessage: '.text-danger.ng-scope',
  list: '.selectable-item.ng-scope.selectable-item',
  developerContact: 'chpl-deveeloper-bridge',
  developerWebsite: '//div[text()=\'Website\']/following-sibling::div/a',
  developerStatus: '#developer-status-0',
  splitDeveloper: '#developer-component-split',
  developerName: '#name',
  errors: 'div.text-danger',
  mergeDeveloper: '#developer-component-merge',
  editWebsite: '#website',
  contact: {
    fullName: '#fullName',
    title: '#title',
    email: '#email',
    phone: '#phoneNumber',
  },
  address: {
    line1: '#line1',
    line2: '#line2',
    city: '#city',
    state: '#state',
    zipcode: '#zipcode',
    country: '#country',
  },
};

class DevelopersPage {
  constructor () { }

  get developersSelect () {
    return $(elements.developersSelect);
  }

  get developersButton () {
    return $(elements.developersButton);
  }

  getDeveloperPageTitle (developer) {
    return $('h2=' + developer);
  }

  get directReviewsHeader () {
    return $(elements.directReviewsHeader);
  }

  get productsHeader () {
    return $(elements.productsHeader);
  }

  get editProductsHeader () {
    return $(elements.editProductsHeader);
  }

  get editVersionHeader () {
    return $(elements.editVersionHeader);
  }

  get products () {
    return $$(elements.products);
  }

  get editWebsite () {
    return $(elements.editWebsite);
  }

  getProduct (product) {
    return $('.products__product-header-item--first=' + product).$('..').$('..');
  }

  getProductInfo (product) {
    return product.$('.product__product-info');
  }

  getVersionCount (product) {
    return product.$('.products__product-header').$$('.products__product-header-item--end')[0];
  }

  getSurveillanceData (product) {
    return product.$('.products__product-header').$$('.products__product-header-item')[1];
  }

  getListingCount (product) {
    return product.$('.products__product-header').$$('.products__product-header-item')[2];
  }

  get editProductName () {
    return $(elements.editProductName);
  }

  get editProductCode () {
    return $(elements.editProductCode);
  }

  get editVersionName () {
    return $(elements.editVersionName);
  }

  get splitVersionVersion () {
    return $(elements.splitVersionVersion);
  }

  get editVersionCode () {
    return $(elements.editVersionCode);
  }

  get editDeveloper () {
    return $(elements.editDeveloper);
  }

  selectDeveloper (developerName) {
    this.developersSelect.selectByVisibleText(developerName);
    this.developersButton.click();
  }

  getEditButton (product) {
    return product.$('.product__product-info').$('#edit-button');
  }

  getMergeButton (product) {
    return product.$('.product__product-info').$('#merge-button');
  }

  getSplitButton (product) {
    return product.$('.product__product-info').$('#split-button');
  }

  getProductSplitButton (product) {
    return product.$('.product__product-info').$('ul[aria-labeledby="split-button"]').$$('li')[0];
  }

  getProductMergeButton (product) {
    return product.$('.product__product-info').$('ul[aria-labeledby="merge-button"]').$$('li')[0];
  }

  getVersionSplitButton (product) {
    return product.$('.product__product-info').$('ul[aria-labeledby="split-button"]').$$('li')[1];
  }

  getVersionMergeButton (product) {
    return product.$('.product__product-info').$('ul[aria-labeledby="merge-button"]').$$('li')[1];
  }

  selectProduct (product) {
    product.$('.products__product-header').click();
  }

  getSelectableVersions (product, productId) {
    return product.$(elements.activeVersion + '-' + productId).$$('option');
  }

  selectVersion (product, productId, versionName) {
    product.$(elements.activeVersion + '-' + productId).selectByVisibleText(versionName);
  }

  editProduct (product) {
    this.getEditButton(product).click();
    product.$('.product__product-info-item-action').$('.dropdown-menu').$$('li')[0].click();
  }

  splitProduct (product) {
    this.getSplitButton(product).click();
    const btn = product.$$('li').filter(item => item.getText() === 'Product')[0];
    btn.click();
  }

  mergeProduct (product) {
    this.getMergeButton(product).click();
    const btn = product.$$('li').filter(item => item.getText() === 'Product')[0];
    btn.click();
  }

  moveProductToBeMerged (productName) {
    const count = $$(elements.list).length;
    for (var i = 0; i < count; i++) {
      if ($$(elements.list)[i].getText() === productName) {
        $$(elements.list)[i].scrollIntoView({block: 'center', inline: 'center'});
        $$(elements.list)[i].click();
      }
    }
  }

  moveVersion (id) {
    $('#products-version-move-new-' + id).click();
  }

  moveListing (id) {
    $('#listings-listing-move-new-' + id).click();
  }

  restoreListing (id) {
    $('#listings-listing-move-old-' + id).click();
  }

  getActiveVersion (product, productId) {
    return product.$(elements.activeVersion + '-' + productId);
  }

  getActiveContact (product) {
    return product.$('chpl-contact');
  }

  editVersion (product) {
    this.getEditButton(product).click();
    product.$('.product__product-info-item-action').$('.dropdown-menu').$$('li')[1].click();
  }

  mergeVersion (product) {
    this.getMergeButton(product).click();
    const btn = product.$$('li').filter(itm => itm.getText() === 'Version')[0];
    btn.click();
  }

  get versionMergeButton () {
    return $$('.product__product-action-filter-item.ng-scope')[2];
  }

  get versionName () {
    return $(elements.versionName);
  }

  moveVersionToBeMerged (versionName) {
    const count = $$(elements.list).length;
    for (var i = 0; i < count; i++) {
      if ($$(elements.list)[i].getText() === versionName) {
        $$(elements.list)[i].click();
      }
    }
  }

  get errorMessage () {
    return $(elements.errorMessage);
  }

  get developerContact () {
    return $(elements.developerContact);
  }

  get developerWebsite () {
    return $(elements.developerWebsite);
  }

  get developerStatus () {
    return $(elements.developerStatus);
  }

  get splitDeveloper () {
    return $(elements.splitDeveloper);
  }

  get developerName () {
    return $(elements.developerName);
  }

  get errors () {
    return $(elements.errors).$('ul');
  }

  get mergeDeveloper () {
    return $(elements.mergeDeveloper);
  }

  get fullName () {
    return $(elements.contact.fullName);
  }

  get title () {
    return $(elements.contact.title);
  }

  get email () {
    return $(elements.contact.email);
  }

  get phone () {
    return $(elements.contact.phone);
  }

  get line1 () {
    return $(elements.address.line1);
  }

  get line2 () {
    return $(elements.address.line2);
  }

  get city () {
    return $(elements.address.city);
  }

  get state () {
    return $(elements.address.state);
  }

  get zipcode () {
    return $(elements.address.zipcode);
  }

  get country () {
    return $(elements.address.country);
  }

  moveDeveloperToSplit (id) {
    $('#developers-product-move-new-' + id).click();
  }

  moveDeveloperToBeMerged (developerName) {
    $('//div[text()=\'' + developerName + '\']').click();
  }

  selectAllCertificationStatus () {
    $('#filter-button').click();
    $('chpl-filter-multiple').$$('.filter-multiple__item')[0].click();
    $('#filter-button').click();
  }

  setAddress(address) {
    $(elements.address.line1).setValue(address.line1);
    $(elements.address.line2).setValue(address.line2);
    $(elements.address.city).setValue(address.city);
    $(elements.address.state).setValue(address.state);
    $(elements.address.zipcode).setValue(address.zipcode);
    $(elements.address.country).setValue(address.country);
  }

  setContact(contact) {
    $(elements.contact.fullName).setValue(contact.fullName);
    $(elements.contact.title).setValue(contact.title);
    $(elements.contact.email).setValue(contact.email);
    $(elements.contact.phone).setValue(contact.phone);
  }
}

export default DevelopersPage;

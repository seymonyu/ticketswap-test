const { REGION_OPTION } = require("@wdio/cli/build/constants");

class MainPage {
  constructor() {
   
    this.inputSearch = '#site-search-input';
    this.searchResultFirst = '#site-search-item-0'  
    this.userAvatar = 'aria/Avatar'
    this.loginGoogle = 'button*=Google'
   
    return this.searchResultFirst, this.userAvatar, this.inputSearch
  }
}

module.exports = new MainPage();

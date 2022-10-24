const { REGION_OPTION } = require("@wdio/cli/build/constants");

class MainPage {
  constructor() {
   
    this.inputSearch = '#site-search-input';
    this.searchResultFirst = '#site-search-item-0'  
    this.header4 = 'h4'
    this.userAvatar = 'aria/Avatar'
    this.loginGoogle = 'button*=Google'
    this.notFoundHeader = 'h3*=Found'
   
    return this.searchResultFirst, this.userAvatar, this.inputSearch
  }
}

module.exports = new MainPage();

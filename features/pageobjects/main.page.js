const { REGION_OPTION } = require("@wdio/cli/build/constants");

class MainPage {
  constructor() {
   
    this.inputSearch = '#site-search-input';
    this.searchResultFirst = '#site-search-item-0'  
   
   
    return this.searchResultFirst
  }
}

module.exports = new MainPage();

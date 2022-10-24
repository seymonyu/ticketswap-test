


class Utils {
  launchApp() {
    browser.launchApp();
    
  }
  pause(seconds) {
    browser.pause(seconds * 1000);
  }
  getObjectLocator(screen) {
    return require(`../../pageobjects/${screen}.screen.js`);
  }
  async isVisible(locator) {
    return $(locator).isDisplayed();
    
  }
  async getValue(locator){
    return $(locator).getValue()
  }

  async click(locator) {
    await $(locator).click();
  }

  async getAttribute(locator, attributeName){
    await $(locator).getAttribute(attributeName)
  }

  async setValue(locator, value){
    await $(locator).setValue(value)
  }

  async waitForElement(locator, waitTimeInSeconds) {
    await $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
  }
  async assert() {
    expect(
      await this.isVisible(this.getObjectLocator("login").emailLabel)
    ).toBe(false);
  }



  async saveScreenshot() {
    //const screenshot_folder = process.env.DEVICEFARM_LOG_DIR
    const screenshot_folder = "../../Desktop/screenshots";
    const filename = new Date().getTime();
    await browser.pause(500);
    await browser.saveScreenshot(screenshot_folder + "/" + filename + ".png");
  }

 

}

module.exports = new Utils();

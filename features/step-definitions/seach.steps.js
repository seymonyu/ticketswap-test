const { Given, When, Then } = require('@wdio/cucumber-framework');
const MainPage = require('./../pageobjects/main.page');
const Utils = require('./utils')


url = "https://ticketswap.com"


Given('the user is on main page', async () => {
    await browser.url(url)

  })
  
When(/^the user enters (\w+) in the search field$/, async (keyWord) => {
    await Utils.setValue(MainPage.inputSearch, keyWord)
    browser.pause(2000)
})  

Then(/^the results include (\w+)$/, async (keyWord) =>{
    const result = await $('#site-search-item-0').$('h4')
    await Utils.saveScreenshot()
    console.log(result)
    await expect(result).toHaveTextContaining(keyWord)

})


When(/^the user clicks the first result with (\w+)$/, async (search) =>{
    const result = await $('#site-search-item-0').$('h4')
    await Utils.saveScreenshot()
    await expect(result).toHaveTextContaining(search)
    await $('#site-search-item-0').click()
    await Utils.waitForElement('.e1gtd2336')
})

Then(/^the result page is opened and url contains (\w+)$/, async (search) =>{
    expect(await browser.getUrl()).toContain(search.toLowerCase())
})


Then('the placeholder is in the input field', async () =>{
    const placeholder = await $(MainPage.inputSearch)
     await expect(placeholder).toHaveAttrContaining('placeholder', 'Search')
})
When('the user enters % in the search field', async () => {
    await Utils.setValue(MainPage.inputSearch, '%')
})  

Then('the "No results found" error message should be shown', async () =>{
    const result = await $('.css-12mo4ps')
    await Utils.saveScreenshot()
    expect(result).toHaveTextContaining('No results found')
})


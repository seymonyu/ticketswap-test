const { Given, When, Then } = require('@wdio/cucumber-framework');
const MainPage = require('../pageobjects/main.page');
const EventPage = require('../pageobjects/event.page');

const Utils = require('./utils')


url = "https://ticketswap.com"


Given('the user is on main page', async () => {
    await browser.url(url)

  })
  
When(/^the user enters (\w+) in the search field$/, async (keyWord) => {
    await Utils.setValue(MainPage.inputSearch, keyWord)
 })  

Then(/^the results include (\w+)$/, async (keyWord) =>{
    const result = Utils.getChildElement(MainPage.searchResultFirst, MainPage.header4)
    await Utils.saveScreenshot()
    await expect(result).toHaveTextContaining(keyWord)


})


When(/^the user clicks the first result with (\w+)$/, async (search) =>{
    const result = await $(MainPage.searchResultFirst)
    await Utils.saveScreenshot()
    await expect(result).toHaveTextContaining(search)
    await Utils.click(MainPage.searchResultFirst)
    await Utils.waitForElement(`h1*=${search}`)
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
    const errorHeader = await $(MainPage.notFoundHeader)
    await Utils.saveScreenshot()
    expect(errorHeader).toHaveTextContaining('No results found')
})


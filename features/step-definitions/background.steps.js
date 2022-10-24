const { Given, When, Then } = require('@wdio/cucumber-framework');

url = "https://ticketswap.com"

Given('the user is on the login page', async () => {
    await browser.url(url)
})

When('the user submits username and password', async () => {
    console.log(url)
})

Then('the user is logged in', async () => {
    console.log(url)
})
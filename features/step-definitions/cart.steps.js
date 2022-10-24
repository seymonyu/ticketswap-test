const { Given, When, Then } = require('@wdio/cucumber-framework');


url = "https://ticketswap.com"


Given('the user is on ticket page', async () => {
    await browser.url(url)
  })
  
When('the user clicks Buy Ticket button', async () => {
    console.log(url)
 })  

Then('the ticket is added to cart', async () =>{
    console.log(url)
})

Then('the user is taken to the cart', async () => {
    console.log(url)
})

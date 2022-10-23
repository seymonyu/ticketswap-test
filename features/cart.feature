Feature: Cart feature

    Background: User is Logged In
        Given the user is on the login page
        When the user submits username and password
        Then the user is logged in

    Scenario: As a user, I can add an item to my cart
        Given the user is on ticket page
        When the user clicks Buy Ticket button
        Then the ticket is added to cart
        And the user is taken to the cart

      
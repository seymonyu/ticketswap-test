Feature: Cart feature

    Background: User is Logged In
        Given I navigate to the login page
        When I submit username and password
        Then I should be logged in 


    Scenario: As a user, I can add an item to my cart
        Given the user is on ticket page
        When the user clicks Buy Ticket button
        Then the ticket is added to cart
        And the user is taken to the cart

      
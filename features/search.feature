Feature: Search feature


    Scenario Outline: As a user, I can perform a search
        Given the user is on main page
        When the user enters <keyWord> in the search field
        Then the results include <keyWord>

    Examples:

    | keyWord |
    | Tame |

    Scenario Outline: When the user clicks the result they should be navigated to the result page
        Given the user is on main page
        When the user enters <search> in the search field
        And the user clicks the first result with <search>
        Then the result page is opened and url contains <search> 
    
    Examples:

    | search |
    |Loveland|

    Scenario: Placeholder text should be displayed in search input field
        Given the user is on main page
        Then the placeholder is in the input field
        
    Scenario: Error message is shown user inserted % in search field
        Given the user is on main page
        When the user enters % in the search field
        Then the "No results found" error message should be shown


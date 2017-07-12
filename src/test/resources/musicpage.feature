Feature: Music details page

  Scenario: The user wants to see the first song's details
    Given the user is on the landing page
    When The user clicks on the first song's details link
    Then The user will be navigated to the first song's detial page
    And The user will see the first song's title


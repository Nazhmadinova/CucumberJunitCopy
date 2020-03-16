Feature: header

  @dzone
  Scenario: Header comparison
    Given User goes to "https://dzone.com/articles/gradle-vs-maven"
    And User takes header
    Then User goes to "https://dzone.com/articles/api-security-weekly-issue-71"
    And User takes header of that page
    Then User compares two headers








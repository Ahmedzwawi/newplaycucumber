Feature: administration dashboard

  @Post @Integration
  Scenario: Post
    Given I open the login page
    When I login with username "testeur_integration" and password "testeur_qa"
    When I am on the dashboard page
    When I click on the "Post" button
    When I should be redirected to the post page
    When I fill the form with the data
      | title | content |
      | fzoo   | bazr     |
    And I click on the "Save" button
    Then I should be redirected to the dashboard page & see the post in the list

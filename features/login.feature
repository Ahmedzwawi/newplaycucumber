Feature: administration Login

  @valid @Integration
  Scenario: Successful login
    Given I open the login page
    When I login with username "testeur_integration" and password "testeur_qa"
    Then I should be redirected to the dashboard

  @invalid @Integration
  Scenario: Failed login with wrong credentials
    Given I open the login page
    When I login with username "testeur_integration" and password "wrongpassword"
    Then I should see an error message

Feature: administration dashboard

  @Post
  Scenario Outline: Post
    Given I open the login page "<env>"
    When Ilogin"<username>"&"<password>"
    When I am on the dashboard page
    When I click on the "Post" button
    When I should be redirected to the post page
    When I fill the form with the data
    And I click on the "Save" button
    # Then I should be redirected to the dashboard page & see the post in the list

    @INT
      Examples:
  | username            | password     | env                                                           |
  | testeur_integration | testeur_qa   | http://192.168.1.95:9091/admin/login/?next=/admin/|

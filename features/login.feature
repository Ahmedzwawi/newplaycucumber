Feature: administration Login - login

  @valid 
  Scenario Outline: Successful login login
  Given I open the login page "<env>"
  When Ilogin"<username>"&"<password>"
  # Then I should be redirected to the dashboard

  @INT 
  Examples:
  | username			| password	 | env														   |
  | testeur_integration | testeur_qa   | http://192.168.1.95:9091/admin/login/?next=/admin/|
  | testeur_integration | testeur_qa_3 | http://192.168.1.95:9091/admin/login/?next=/admin/|
  @ignore
  Examples:
  | username			| password	 | env														   |
  | testeur_integration | testeur_qa   | http://192.168.1.95:9091/admin/login/?next=/admin/|
  | testeur_integration | testeur_qa_3 | http://192.168.1.95:9091/admin/login/?next=/admin/|
# Feature: administration Login

#   @valid @Integration
#   Scenario Outline: Successful login
#     Given I open the login page "<env>"
#     When Ilogin"<username>"&"<password>"
#     # Then I should be redirected to the dashboard

#   @int
#   Examples:
#   | username            | password     | env                                                           |
#   | testeur_integration | testeur_qa   | http://192.168.1.95:9091/admin/login/?next=/admin/|
#   | testeur_integration | testeur_qa_2 | http://192.168.1.95:9091/admin/login/?next=/admin/|

  # @int
  # Examples:
  # | username            | password     | env                                                           |
  # | testeur_integration | testeur_qa   | http://rec.siteinfos.com/admin/login/?next=/admin/            |
  # | testeur_integration | testeur_qa_2 | http://rec.siteinfos.com/admin/login/?next=/admin/            |

  @invalid @ignore 
  Scenario Outline: Error login
    Given I open the login page "<env>"
    When Ilogin"<username>"&"<password>"
    # Then I should be redirected to the dashboard
    Then I should see an error message

  @INT @ignore
  Examples:
  | username                | password        | env                                                           |
  | testeur_integrationFaux | testeur_qa      | http://192.168.1.95:9091/admin/login/?next=/admin/            |
  | testeur_integration     | testeur_qa_2    | http://192.168.1.95:9091/admin/login/?next=/admin/            |
  | testeur_integrationFaux | testeur_qaFaux  | http://192.168.1.95:9091/admin/login/?next=/admin/            |
  | testeur_integrationFaux | testeur_qa_2    | http://192.168.1.95:9091/admin/login/?next=/admin/            |

  @rec @ignore
  Examples:
  | username                | password        | env                                                           |
  | testeur_recetteFaux     | testeur_qa_3    | http://192.168.1.95:9092/admin/login/?next=/admin/            |
  | testeur_recette_2_faut  | testeur_qa_4    | http://192.168.1.95:9092/admin/login/?next=/admin/            |
  | testeur_recetteFaux     | testeur_qa_3    | http://192.168.1.95:9092/admin/login/?next=/admin/            |
  | testeur_recette_2       | testeur_qa_4_faut| http://192.168.1.95:9092/admin/login/?next=/admin/            |

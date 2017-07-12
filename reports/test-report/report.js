$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("foundationtest1.feature");
formatter.feature({
  "line": 1,
  "name": "Google search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1238644615,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Finding some cheese",
  "description": "",
  "id": "google-search;finding-some-cheese",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I am on the Google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I search for \"Cheese!\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the page title should start with \"Cheese!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "foundationTsteps.iAmOnTheGoogleSearchPage()"
});
formatter.result({
  "duration": 1162551797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cheese!",
      "offset": 14
    }
  ],
  "location": "foundationTsteps.iSearchFor(String)"
});
formatter.result({
  "duration": 2893608795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cheese!",
      "offset": 34
    }
  ],
  "location": "foundationTsteps.thePageTitleShouldStartWith(String)"
});
formatter.result({
  "duration": 34364305,
  "status": "passed"
});
formatter.after({
  "duration": 8967551,
  "status": "passed"
});
formatter.uri("movesdetails.feature");
formatter.feature({
  "line": 1,
  "name": "Movie details page",
  "description": "",
  "id": "movie-details-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19010556,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "The user views the movie introduction of Transformer",
  "description": "",
  "id": "movie-details-page;the-user-views-the-movie-introduction-of-transformer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "The user lands on the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The user clicks on the details button of Transformer",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The user is navigated to the Transformer page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "The user can see the Transformer title",
  "keyword": "And "
});
formatter.match({
  "location": "foundationTsteps.theUserLandsOnTheHomepageOfTheWebsite()"
});
formatter.result({
  "duration": 1404254,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat foundationTsteps.theUserLandsOnTheHomepageOfTheWebsite(foundationTsteps.java:59)\n\tat ✽.Given The user lands on the homepage of the website(movesdetails.feature:4)\n",
  "status": "pending"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 405813,
  "status": "passed"
});
formatter.before({
  "duration": 31480153,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "The user views the movie: The Wall",
  "description": "",
  "id": "movie-details-page;the-user-views-the-movie:-the-wall",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "The user is on the homepage of the website",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "The user clicks the details button of The Wall",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The user is navigated to The Wall page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The user can see The Wall title",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1874629,
  "status": "passed"
});
});
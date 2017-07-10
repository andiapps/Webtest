$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("foundationtest1.feature");
formatter.feature({
  "line": 1,
  "name": "Google search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1152014236,
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
  "duration": 1135905686,
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
  "duration": 2112835895,
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
  "duration": 16084095,
  "status": "passed"
});
formatter.after({
  "duration": 4554912,
  "status": "passed"
});
});
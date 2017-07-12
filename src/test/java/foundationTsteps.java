import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * Created by diiiworkstation on 10/07/2017.
 */
public class foundationTsteps {
    private String url = "";
    private WebDriver driver;


    @Before
    public void setUp() {
        url = System.getProperty("url", "https://andiapps.github.io/musicsite/");
        driver = new HtmlUnitDriver();
    }
    @After
    public void tearDown() { driver.close();
    }



    @Given("^The user has landed on the music site landing page$")
    public void theUserHasLandedOnTheMusicSiteLandingPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.get("https://andiapps.github.io/musicsite/");
    }

    @When("^The landing page is loaded$")
    public void theLandingPageIsLoaded() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        new WebDriverWait(driver,5)
                .until(
                        ExpectedConditions.presenceOfElementLocated(By.ById.id("thatswhatilike.jpg"))
                );

        Boolean loaded = ((JavascriptExecutor)driver).executeScript("return document.readyState").equals("complete");
        assertTrue("Page loaded", loaded);
    }

    @Then("^The user will see page title Andy's Music Selections$")
    public void theUserWillSeePageTitleAndySMusicSelections() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        WebElement webElement = driver.findElement(By.xpath("html/body/div/div[1]/div/div/h1"));

        Assert.assertTrue(webElement.getText().contains("Top five musics in my mind "));
    }

    @Given("^the user is on the landing page$")
    public void theUserIsOnTheLandingPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.get("https://andiapps.github.io/musicsite/");
    }

    @When("^The user clicks on the first song's details link$")
    public void theUserClicksOnTheFirstSongSDetailsLink() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.id("song1.html")).click();
    }

    @Then("^The user will be navigated to the first song's detial page$")
    public void theUserWillBeNavigatedToTheFirstSongSDetialPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.get("https://andiapps.github.io/musicsite/song1.html");
    }

    @And("^The user will see the first song's title$")
    public void theUserWillSeeTheFirstSongSTitle() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        assertTrue(driver.getTitle().contains("That’s What I Like"));
    }
}

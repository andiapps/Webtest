import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static junit.framework.TestCase.assertEquals;

/**
 * Created by diiiworkstation on 10/07/2017.
 */
public class foundationTsteps {
    private WebDriver driver;

    @Given("^I am on the Google search page$")
    public void iAmOnTheGoogleSearchPage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.get("http://www.google.com");
        assertEquals("Google", driver.getTitle());

    }

    @When("^I search for \"([^\"]*)\"$")
    public void iSearchFor(String searchTerm) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        WebElement element = driver.findElement(By.name("q"));
        element.sendKeys(searchTerm);
        element.submit();

    }

    @Then("^the page title should start with \"([^\"]*)\"$")
    public void thePageTitleShouldStartWith(String pageTitleStart) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.titleContains(pageTitleStart));
        
    }


    @Before
    public void setUp() {
        driver = new HtmlUnitDriver();
    }
    @After
    public void tearDown() { driver.close();
    }
}

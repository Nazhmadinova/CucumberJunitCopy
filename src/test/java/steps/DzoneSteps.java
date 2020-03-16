package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import utilities.Driver;
import utilities.Log;
import utilities.TempStorage;

public class DzoneSteps {

    @Given("User goes to {string}")
    public void user_goes_to(String string) {
        Driver.getDriver().get(string);
        Log.info("user on: " + string);
    }

    @Given("User takes header")
    public void user_takes_header() {
        String str = Driver.getDriver().findElement(By.xpath("//h1")).getText();
        TempStorage.addData("test", str);
        Log.info("header taken: " + str);
    }

    @Then("User takes header of that page")
    public void user_takes_header_of_that_page() {
        String str = Driver.getDriver().findElement(By.xpath("//h1")).getText();
        TempStorage.addData("test2", str);
        Log.info("header 2 is taken: " + str);
    }

    @Then("User compares two headers")
    public void user_compares_two_headers() {
        Log.warn("Comparing two header");
        Assert.assertEquals(TempStorage.getData("test"),TempStorage.getData("test2"));
        Log.warn("failed");
    }



}

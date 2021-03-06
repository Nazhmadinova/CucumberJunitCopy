package steps.APISteps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import utilities.APIRunner;

public class SingleStudentSteps {

    @When("user hits single student API with {string}")
    public void user_hits_single_student_API_with(String uri) {
        APIRunner.runGET(uri);

    }

    @Then("user tests for required attributes")
    public void user_tests_for_required_attributes() {
        System.out.println(APIRunner.getResponse().getFirstName());
        System.out.println(APIRunner.getResponse().getLastName());
        Assert.assertNotNull(APIRunner.getResponse().getFirstName());
        Assert.assertNotNull(APIRunner.getResponse().getLastName());
        Assert.assertNotNull(APIRunner.getResponse().getContact().getEmailAddress());
        Assert.assertNotNull(APIRunner.getResponse().getCompany().getAddress());
    }

}

package steps.APISteps;

import APIModels.Student;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import utilities.APIRunner;

public class StudentTitleSteps {

    @When("user hits list of students api with {string}")
    public void user_hits_list_of_students_api_with(String string) {
        APIRunner.runGET(string);
    }

    @Then("user verifies each student title to be at least two letters")
    public void user_verifies_each_student_title_to_be_at_least_two_letters() {
        for(Student student: APIRunner.getResponse().getStudents()){
            Assert.assertTrue(student.getCompany().getTitle().length() >= 2);
        }
    }

    @Then("user verifies each students email address to be valid")
    public void user_verifies_each_students_email_address_to_be_valid() {
        int count = 0;
        for(Student student: APIRunner.getResponse().getStudents()){
            Assert.assertTrue("" + count , student.getContact().getEmailAddress().contains("@") && student.getContact().getEmailAddress().contains("."));
            count++;
        }
    }

}

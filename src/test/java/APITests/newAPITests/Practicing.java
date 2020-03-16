package APITests.newAPITests;

import APIModels.CustomResponse;
import APIModels.RequestBody;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.response.Response;
import utilities.APIRunner;

public class Practicing {

    public static void main(String[] args) throws JsonProcessingException {

        String getUrl ="http://api.cybertektraining.com/teacher/all";
//        APIRunner.runGET(getUrl);
//        CustomResponse cr = APIRunner.getCr();

        String deleteUrl = "http://api.cybertektraining.com/teacher/delete/787";
//        APIRunner.runDELETE(deleteUrl);

        String getOneUrl = "http://api.cybertektraining.com/teacher/name/Anna";
//        APIRunner.runGET(getOneUrl);
//        CustomResponse cr = APIRunner.getResponse();
//        System.out.println(cr.getTeachers().get(0).getFirstName());



        String createUrl = "http://api.cybertektraining.com/teacher/create";
//        RequestBody body = new RequestBody();
//        body.setLastName("Fare");
//        body.setFirstName("Fari");
//        body.setBatch(14);
//        body.setPhone("12345678");
//        body.setSubject("subject");
//        body.setBirthDate("20/10/2010");
//        body.setDepartment("dep");
//        body.setEmailAddress("asdfhj");
//        body.setGender("male");
//        body.setJoinDate("02/05/2019");
//        body.setPremanentAddress("address");
//        body.setSalary(1345);
//        body.setSection("D");
//        body.setPassword("pass");
//        APIRunner.runPOST(body,createUrl);
//        CustomResponse cr = APIRunner.getResponse();
//        System.out.println(cr.getTeacherId());

        String putUpl = "http://api.cybertektraining.com/teacher/update";
        RequestBody body = new RequestBody();
        body.setBatch(14);
        body.setBirthDate("20/10/2010");
        body.setDepartment("dep");
        body.setEmailAddress("asdfhj");
        body.setFirstName("Fari");
        body.setGender("male");
        body.setJoinDate("02/05/2019");
        body.setLastName("Fareeeee");
        body.setPassword("pass");
        body.setPhone("12345678");
        body.setPremanentAddress("address");
        body.setSalary(1345);
        body.setSection("D");
        body.setSubject("subject");
        body.setTeacherId(1806);


    }

}

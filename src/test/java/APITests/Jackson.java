package APITests;

import APIModels.Instructor;
import APIModels.Student;
import APIModels.Teacher;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.util.JSON;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

import java.io.IOException;

public class Jackson {

    @Test
    public void test() throws IOException {

        String json = "{\"id\":7,\"firstName\":\"James\",\"lastName\":\"Milner\",\"batch\":10,\"subject\":\"Intro to Pojo\",\"location\":\"Chicago\"}";
        ObjectMapper objectMapper = new ObjectMapper();
        //from json to object
        Instructor instructor = objectMapper.readValue(json, Instructor.class);
        System.out.println(instructor.getFirstName());
    }

    @Test
    public void objectToJson() throws JsonProcessingException {
        Instructor instructor = new Instructor();
        instructor.setSubject("intro to cs101");
        instructor.setId(34);
        instructor.setFirstName("Zhaina");

        ObjectMapper objectMapper = new ObjectMapper();
        //from object to json
        String json = objectMapper.writeValueAsString(instructor);
        System.out.println(json);
    }


    @Test
    public void oneStudent() throws IOException {
        Response response = RestAssured.get("http://cybertekchicago.com/student/87");
        System.out.println(response.asString());
        ObjectMapper objectMapper = new ObjectMapper();
        Student student = objectMapper.readValue(response.toString(), Student.class);
        System.out.println(student.getContact().getEmailAddress());
    }

}

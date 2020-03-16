package APITests;

import APIModels.CustomResponse;
import APIModels.Instructor;
import APIModels.Student;
import APIModels.Teacher;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Test;
import utilities.APIRunner;

import java.io.IOException;

public class PostApi {


    @Test
    public void postInstructor(){
        Instructor instructor = new Instructor();
        instructor.setFirstName("Alex");
        instructor.setLastName("Key");
        instructor.setSubject("API");
        instructor.setBatch(14);

        //creating instructor
        Response response = RestAssured.given().contentType(ContentType.JSON)
                .body(instructor).when().post("http://cybertekchicago.com/student/create");
        System.out.println(response.statusCode());
        System.out.println(response.asString());
    }

    @Test
    public void customSingleStudent() throws IOException {
        Response response = RestAssured.get("http://cybertekchicago.com/student/87");
        ObjectMapper mapper = new ObjectMapper();
        CustomResponse cr = mapper.readValue(response.asString(), CustomResponse.class);
        System.out.println(cr.getFirstName());
        System.out.println(cr.getLastName());
        System.out.println(cr.getContact().getEmailAddress());

    }

    @Test
    public void teacherFromList() throws IOException {
        Response response = RestAssured.get("http://cybertekchicago.com/teacher/all");
        System.out.println(response.statusCode());
        ObjectMapper mapper = new ObjectMapper();
        CustomResponse cr = mapper.readValue(response.asString(), CustomResponse.class);

        System.out.println(cr.getTeachers().get(0).getFirstName());

        for(Teacher teacher: cr.getTeachers()){
            if(teacher.getBatch() == 0){
                System.out.println(teacher.getFirstName());
            }
        }

    }

    @Test
    public void studentLocationList() throws IOException {
        Response response = RestAssured.get("http://cybertekchicago.com/student/all");
        ObjectMapper mapper = new ObjectMapper();
        CustomResponse cr = mapper.readValue(response.asString(), CustomResponse.class);
        System.out.println(cr.getStudents().size());
        int count = 0;
        for(Student student: cr.getStudents()){
            if(student.getCompany().getAddress().getCity().equalsIgnoreCase("Chicago")){
                count++;
                System.out.println(student.getFirstName());
            }
        }

        System.out.println("in Chicago " + count + " students");

    }

    @Test
    public void utilTest(){
        APIRunner.runGET("http://cybertekchicago.com/teacher/all");
        System.out.println(APIRunner.getResponse().getTeachers().get(0).getFirstName());
    }

    @Test
    public void teacherBatch7(){
        APIRunner.runGET("http://cybertekchicago.com/teacher/all");
        int count = 0;
        int count1 = 0;
        for(Teacher teacher: APIRunner.getResponse().getTeachers()){
            if(teacher.getBatch() == 11){
                System.out.println(" batch 11 -> "+teacher.getFirstName());
                count++;
            }

            if(teacher.getSubject().equalsIgnoreCase("Java")){
                System.out.println("subject java: " + teacher.getFirstName());
                count1++;
            }
        }
        System.out.println("batch 11 -> " + count);
        System.out.println("java: " + count1);
    }

}

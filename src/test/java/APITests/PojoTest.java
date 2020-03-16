package APITests;

import APIModels.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.Test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class PojoTest {

    @Test
    public void test() throws IOException {
        Instructor instructor = new Instructor();
        instructor.setFirstName("James");
        instructor.setLastName("Milner");
        instructor.setSubject("Intro to Pojo");
        instructor.setId(7);
        instructor.setBatch(10);

        //it is converts to json format
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(instructor);
        System.out.println(json);

        Instructor instructor2 = objectMapper.readValue(json, Instructor.class);
        System.out.println(instructor2.getBatch());
    }

    @Test
    public void studentJson() throws JsonProcessingException {

        Address address = new Address();
        address.setCity("Chicago");

        Company company = new Company();
        company.setTitle("SDET");
        company.setAddress(address);

        Contact contact = new Contact();
        contact.setEmailAddress("a@mail.com");
        contact.setPhone("12345678");

        List<Student> students = new ArrayList<>();
        Student student = new Student();
        student.setFirstName("Molly");
        student.setLastName("Solly");
        student.setCompany(company);
        student.setContact(contact);
        students.add(student);


        CustomResponse cr = new CustomResponse();
        cr.setStudents(students);

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(cr);
        System.out.println(json);

    }

    @Test
    public void studentGet() throws IOException {
        Response response = RestAssured.get("http://api.cybertektraining.com/student/all");

        ObjectMapper mapper = new ObjectMapper();
        CustomResponse cr =  mapper.readValue(response.asString(), CustomResponse.class);
        System.out.println(cr.getStudents().size());
        System.out.println(cr.getStudents().get(1).getFirstName());
    }

    @Test
    public void studentJoinDate() throws IOException {

        Response response = RestAssured.get("http://api.cybertektraining.com/student/all");

        ObjectMapper mapper = new ObjectMapper();
        CustomResponse cr =  mapper.readValue(response.asString(), CustomResponse.class);

        int count = 0;
        for(Student student: cr.getStudents()){

            if(student.getCompany().getStartDate().contains("2020")){
                count++;
            }
        }

        System.out.println("Students joined in 2020: " + count);

    }
}

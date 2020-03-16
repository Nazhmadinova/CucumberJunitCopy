package APITests;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

public class CMStudentJsonPath {

    @Test
    public void studentList(){

        Response response = RestAssured.get("http://cybertekchicago.com/teacher/all");
        System.out.println(response.statusCode());
        //status code testing
        Assert.assertEquals(200,response.statusCode());
        //or
        //RestAssured.given().get("http://cybertekchicago.com/teacher/all").then().statusCode(200);
        System.out.println(response.asString());
    }

    @Test
    public void oneTeacher(){

        //in order to get one specific teacher we need teacher id, which is 3041
        Response response = RestAssured.get("http://cybertekchicago.com/teacher/3041");
        System.out.println(response.asString());
        Assert.assertEquals(200,response.statusCode());
        JsonPath jsonPath = response.jsonPath();
        String str = jsonPath.get("teachers[0].lastName");
        System.out.println(str);

    }

    @Test
    public void allTeacher(){
        Response response = RestAssured.get("http://cybertekchicago.com/teacher/all");
        System.out.println(response.asString());
        JsonPath jsonPath = response.jsonPath();
        List<String> subject = jsonPath.get("teachers.subject");
        System.out.println(subject.size());
    }

    @Test
    public void allTeachers(){
        Response response = RestAssured.get("http://api.cybertektraining.com/teacher/all");
        JsonPath jp = response.jsonPath();
        int size = jp.getList("teachers").size();
        System.out.println(size);

        for(int i = 0; i < size; i++){

            String pathName = "teachers[" + i + "].firstName";
            String pathEmail = "teachers[" + i + "].emailAddress";
            String name = jp.get(pathName);
            String email = jp.get(pathEmail);

            Assert.assertNotNull(name);
            Assert.assertNotNull(email);

        }



    }


}

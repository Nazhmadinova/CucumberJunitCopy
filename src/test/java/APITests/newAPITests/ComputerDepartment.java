package APITests.newAPITests;

import APIModels.CustomResponse;
import APIModels.Teacher;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.json.Json;
import utilities.APIRunner;

import java.util.List;

public class ComputerDepartment {

    @Test
    public void departmentOfTeacher(){
        APIRunner.runGET( "http://api.cybertektraining.com/teacher/department/Computer");
        CustomResponse cr = APIRunner.getResponse();

        for(Teacher teacher: cr.getTeachers()){

            String dep = teacher.getDepartment();
            System.out.println(dep);
            Assert.assertTrue(dep.equals("Computer"));
        }
    }

    @Test
    public void departmentOfTeacher2(){

        Response response = RestAssured.get("http://api.cybertektraining.com/teacher/department/Computer");
        JsonPath jsonPath = response.jsonPath();
        int size = jsonPath.getList("teachers").size();

        List<String> teachers = jsonPath.get("teachers.department");

        for(String teacher: teachers){
            System.out.println(teacher);
            Assert.assertEquals("Department failed", "Computer", teacher);
        }

//        for(int i = 0; i < size; i++){
//            String path = "teachers[" + i + "].department";
//            String department = jsonPath.get(path);
//            Assert.assertEquals("Department failed at " + i, "Computer", department);
//        }

    }

}

package utilities;

import APIModels.CustomResponse;
import APIModels.RequestBody;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;

import java.io.IOException;

public class APIRunner {

    private static CustomResponse cr;

    public static CustomResponse getCr(){
        //it was for hook in order put response into record
        return cr;
    }

    public static void runGET(String uri){
        Response response = RestAssured.get(uri);
        System.out.println("STATUS CODE: " + response.statusCode());
        System.out.println(response.asString());
        ObjectMapper mapper = new ObjectMapper();
        try {
            cr = mapper.readValue(response.asString(), CustomResponse.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        cr.setJsonResponse(response.asString());
    }

    public static CustomResponse getResponse(){
        if(cr == null){
            System.out.println("Please run API first");
            throw new RuntimeException();
        }
        return cr;
    }

    public static void runPOST(RequestBody body, String uri){
        Response response = RestAssured.given().contentType(ContentType.JSON).body(body).when().post(uri);
        System.out.println("STATUS CODE: " + response.statusCode());
        //System.out.println(response.asString());
        ObjectMapper mapper = new ObjectMapper();
        try {
            cr = mapper.readValue(response.asString(), CustomResponse.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void runPUT(String jsonBody, String uri){
        Response response = RestAssured.given().body(jsonBody).when().put(uri);
        System.out.println("STATUS CODE: " + response.statusCode());
        //System.out.println(response.asString());
        ObjectMapper mapper = new ObjectMapper();
        try {
            cr = mapper.readValue(response.asString(), CustomResponse.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void runDELETE(String uri){
        Response response = RestAssured.given().contentType(ContentType.JSON).delete(uri);
        System.out.println("STATUS CODE: " + response.statusCode());
    }

}

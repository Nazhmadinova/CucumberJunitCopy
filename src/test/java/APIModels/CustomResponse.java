package APIModels;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_DEFAULT)

@Data
public class CustomResponse {

    private String firstName;
    private String lastName;
    private Contact contact;
    private Company company;
    private List<Teacher> teachers;
    private List<Student> students;
    private String jsonResponse;
    private int teacherId;

   
}

package APIModels;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
@Data
public class RequestBody {

    private String firstName;
    private String lastName;
    private int batch;
    private String birthDate;
    private String department;
    private String emailAddress;
    private String gender;
    private String joinDate;
    private String password;
    private String phone;
    private String premanentAddress;
    private int salary;
    private String section;
    private String subject;
    private int teacherId;

}

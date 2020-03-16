package APIModels;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
@Data
public class Teacher {

    String firstName;
    String lastName;
    int batch;
    String subject;
    String department;
    int teacherId;
    String emailAddress;
    String joinDate;
    String password;
    String phone;
    String gender;
    String birthDay;
    String premanentAddress;
    String section;
    int salary;
    Subject subject2;

}

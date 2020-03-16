package APIModels;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
@Data
public class Student {

    String firstName;
    String lastName;
    int studentId;
    int batch;
    String joinDate;
    String password;
    String subject;
    String gender;
    String major;
    String section;
    String admissionNo;
    Contact contact;
    Company company;

}

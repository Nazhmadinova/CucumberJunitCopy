package APITests;

import APIModels.Subject;
import APIModels.Teacher;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;

public class JacksonTest {

    @Test
    public void jackson() throws JsonProcessingException {
        Teacher teacher = new Teacher();
        teacher.setEmailAddress("gson@gmail.com");
        teacher.setFirstName("Joana");
        teacher.setLastName("Lawrence");
        teacher.setJoinDate("03/15/2020");
        teacher.setSalary(500);
        Subject subject = new Subject();
        subject.setBatch(14);
        subject.setName("Math");
        subject.setYear(2020);
        teacher.setSubject2(subject);

        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(teacher);
        System.out.println(json);
    }

}

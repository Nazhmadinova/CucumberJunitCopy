package Database;

import org.junit.Assert;
import utilities.DBUtility;

import java.util.List;
import java.util.Map;

public class TestingDBUtility {

    public static void main(String[] args) {

        DBUtility.createConnection();
        List<Map<Object, Object>> data = DBUtility.executeQuery("select * from employees");
        DBUtility.close();

//        for(Map<Object, Object> d: data){
//            System.out.println(d);
//        }

        for(Map<Object, Object> d: data) {
            if ((d.get("EMPLOYEE_ID")+"").equals(""+175)) {
                if ((d.get("SALARY")+"").equals(""+8800)){
                    System.out.println("passed");
                } else {
                    System.out.println("failed");
                }

            }
        }


    }

}

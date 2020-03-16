package Database;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FirstClass {

    public static void main(String[] args) {

        // url: ec2-18-220-200-214.us-east-2.compute.amazonaws.com
        //port: 1521
        // SID: xe
        //username: hr
        //password: hr

        //String url = "jdbc:oracle:thin:@yoururl:1521:xe";

        String url = "jdbc:oracle:thin:@ec2-18-220-200-214.us-east-2.compute.amazonaws.com:1521:xe";
        String username = "hr";
        String password = "hr";

        // Connection
        // Statement
        // ResultSet

        try {
            Connection connection = DriverManager.getConnection(url,username,password);
            System.out.println("Connection successful!");
            Statement statement = connection.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            ResultSet resultSet = statement.executeQuery("select first_name, last_name, salary from employees");
            ResultSetMetaData metaData = resultSet.getMetaData();
            int num = metaData.getColumnCount();
            String columnName1 = metaData.getColumnName(1);
            String columnName2 = metaData.getColumnName(2);
  //          resultSet.next();
//            System.out.println("Index 1: " + resultSet.getObject(1));
//            System.out.println("Index 2: " + resultSet.getObject(2));
//
//            // print row 4
//            resultSet.next();
//            resultSet.next();
//            resultSet.next();
//            System.out.println("Index 2: " + resultSet.getObject(2));
//            System.out.println("Index 3: " + resultSet.getOb ject(3));
            int number = 1;
            List<Map<Object, Object>> data = new ArrayList<>();

            while (resultSet.next()){
                Map<Object, Object> map = new HashMap<>();
                //System.out.print(number + " ");
                for(int i = 1; i <= num; i++){
                    map.put(metaData.getColumnName(i), resultSet.getObject(i));
                   // System.out.print(metaData.getColumnName(i) + ": " + resultSet.getObject(i) + " ");
                }
                data.add(map);

                System.out.println();
                number++;
            }

            for(Map<Object, Object> map: data){
                System.out.println(map);
            }
            connection.close();
            statement.close();
            resultSet.close();
        } catch (SQLException e) {
            System.out.println("Connection failed");
        }


    }

}

package Map;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Ten {

    public static void main(String[] args) {
        Map<String, String> passwords = new HashMap<>();
        // put
        passwords.put("Zhaina","Developer");
        passwords.put("hi","buy");
        passwords.put("h","k");

        // get
        passwords.get("Zhaina");

        //remove
        String str = passwords.remove("hi");
        System.out.println(str);
        System.out.println(passwords);

        //keySet
        Set<String> keys = passwords.keySet();

        for(String key: keys){
            System.out.println(passwords.get(key));
        }

    }


}

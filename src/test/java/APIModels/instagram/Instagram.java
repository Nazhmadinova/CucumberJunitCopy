package APIModels.instagram;

import utilities.Config;

import java.util.ArrayList;
import java.util.List;

public class Instagram {

    List<InstagramUser> users;

    public Instagram(){
        users = new ArrayList<>();
    }

    public void addUser(InstagramUser user){
        boolean found = false;
        for(InstagramUser u: users){
            if(u.username.equalsIgnoreCase( user.username)){
                System.out.println("Username already exists. Please try again");
                found = true;
                break;
            }
        }
        if(!found){
            System.out.println("User added to the system");
            users.add(user);
        }

    }

    public void addPost(String username, Post instaPost){
        for(InstagramUser u: users){
            if(u.username.equalsIgnoreCase(username)){
                u.posts.add(instaPost);
                return;
            }
        }
        System.out.println("username: " + username + " not found");
    }

    public void removeUser(String username){
        for(InstagramUser u: users){
            if(u.username.equalsIgnoreCase(username)){
                users.remove(u);
                return;
            }
        }
        System.out.println("username: " + username + " not found");
    }

    public void updateUserInfo(String username, String newName, int newAge){
        for(InstagramUser u: users){
            if(u.username.equalsIgnoreCase(username)){
                u.name = newName;
                u.age = newAge;
                System.out.println("Info updated");
                return;
            }
        }
        System.out.println("username: " + username + " not found");
    }

    public void getAllUsers(String secretKey){
        if(Config.getProperties("apiKey").equals(secretKey)){
            int counter = 1;
            for(InstagramUser u: users){
                System.out.println("User " + counter);
                System.out.println("Name: " + u.name);
                System.out.println("Username: " + u.username);
                System.out.println("Age: " + u.age);
                System.out.println();
                counter++;
            }
        }else {
            System.out.println("Invalid API key, Try it again");
        }

    }

}

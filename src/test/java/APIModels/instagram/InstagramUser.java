package APIModels.instagram;

import java.util.ArrayList;
import java.util.List;

public class InstagramUser {

    String name;
    List<Post> posts;
    int numberOfPosts;
    int age;
    String username;

    public InstagramUser(String username, String name, int age){
        this.name = name;
        this.username = username;
        this.age = age;
        this.posts = new ArrayList<>();
    }

    //=> User that has 2 posts.
    //{
    //    name: "James",
    //    age: 25,
    //    username: "james2020",
    //    numOfPosts: 2,
    //    posts: [
    //        {
    //            caption: "Great Day!",
    //            likes: 122,
    //            comments: [
    //                comment1: "bla bla",
    //                comment2: "you are right"
    //            ]
    //        },
    //        {
    //            caption: "BAD Day!",
    //            likes: 13,
    //            comments: [
    //                comment1: "bla bla",
    //                comment2: "you are right"
    //            ]
    //        }
    //    ]
    //}


}

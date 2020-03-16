package APIModels.instagram;

public class InstaTest {

    public static void main(String[] args) {
        Instagram instagram = new Instagram();

        InstagramUser user1 = new InstagramUser("Zhaina","Gulzhaina",25);
        instagram.addUser(user1);

        InstagramUser user2 = new InstagramUser("Zhazok","Zhazira",27);
        instagram.addUser(user2);


        instagram.getAllUsers("Cyb32134");
    }

}

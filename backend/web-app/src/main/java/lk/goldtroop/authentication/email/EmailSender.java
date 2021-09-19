package lk.goldtroop.Authentication.Email;

public interface EmailSender {
    void send(String to, String email);
    void sendInvitation(String to, String email);
}

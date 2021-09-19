package lk.goldtroop.Authentication.Register;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
public class EmailValidator implements Predicate<String> {

    @Override
    public boolean test(String s) {
        //implement email validator using regex here
        return true;
    }
}

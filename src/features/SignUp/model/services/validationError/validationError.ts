import { ValidateSignUpErrors } from "../../types/signUp";

interface SignUp {
    username?: string;
    password?: string;
}

export function validateSignUp(data: SignUp): ValidateSignUpErrors[] {
    const { username, password } = data
    const errors: ValidateSignUpErrors[] = [];

    if (!data) {
        return [ValidateSignUpErrors.NO_DATA];
    }

    if (!username) {
        errors.push(ValidateSignUpErrors.INCORRECT_USERNAME);
    }

    if (!password) {
        errors.push(ValidateSignUpErrors.EMPTY_PASSWORD);
    } else {
        if (password.length < 6) {
            errors.push(ValidateSignUpErrors.SHORT_PASSWORD);
        }
        if (!/[A-Z]/.test(password)) {
            errors.push(ValidateSignUpErrors.NO_UPPERCASE);
        }
        if (!/[a-z]/.test(password)) {
            errors.push(ValidateSignUpErrors.NO_LOWERCASE);
        }
        if (!/[0-9]/.test(password)) {
            errors.push(ValidateSignUpErrors.NO_NUMBER);
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            errors.push(ValidateSignUpErrors.NO_SPECIAL_CHAR);
        }
    }
    
    return errors;
}

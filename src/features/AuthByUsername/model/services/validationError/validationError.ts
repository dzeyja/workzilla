import { ValidateAuthErrors } from "../../types/AuthByUsername";

interface AuthData {
    username?: string;
    password?: string;
}

export function validateAuth(data: AuthData): ValidateAuthErrors[] {
    const { username, password } = data
    const errors: ValidateAuthErrors[] = [];

    if (!data) {
        return [ValidateAuthErrors.NO_DATA];
    }

    if (!username) {
        errors.push(ValidateAuthErrors.INCORRECT_USERNAME);
    }

    if (!password) {
        errors.push(ValidateAuthErrors.EMPTY_PASSWORD);
    }
    
    return errors;
}

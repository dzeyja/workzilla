import { Profile, ValidateProfileErrors } from "../../types/ProfileSchema";

export function validateProfile(data?: Profile) {
    const errors: ValidateProfileErrors[] = []
    
    if (!data?.first) {
        errors.push(ValidateProfileErrors.INCORRECT_FIRST_NAME)
    }

    if (!data?.lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_LAST_NAME)
    }

    if (!data?.age || data?.age <= 0 || data?.age > 120) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE)
    }

    if (!data?.city) {
        errors.push(ValidateProfileErrors.INCORRECT_CITY)
    }

    if (!data?.specialty) {
        errors.push(ValidateProfileErrors.INCORRECT_SPECIALTY)
    }

    if (!data?.experience) {
        errors.push(ValidateProfileErrors.INCORRECT_EXPERIENCE)
    }

    if (!data?.email?.includes('@')) {
        errors.push(ValidateProfileErrors.INCORRECT_EMAIL)
    }

    if (!data?.role) {
        errors.push(ValidateProfileErrors.INCORRECT_ROLE)
    }

    if (!data?.bio) {
        errors.push(ValidateProfileErrors.INCORRECT_BIO)
    }

    return errors
}
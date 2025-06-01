import { Vacancy } from "entities/Vacancy";
import { ValidateVacancyError } from "../../types/CreateVacancyFormSchema";

export function validateVacancy(data?: Vacancy): ValidateVacancyError[] {
    if (!data) {
        return [ValidateVacancyError.NO_DATA];
    }

    const errors: ValidateVacancyError[] = [];

    if (!data.title?.trim()) errors.push(ValidateVacancyError.INCORRECT_TITLE);
    if (!data.description?.trim()) errors.push(ValidateVacancyError.INCORRECT_DESCRIPTION);
    if (!data.company?.trim()) errors.push(ValidateVacancyError.INCORRECT_COMPANY);
    if (!data.location?.trim()) errors.push(ValidateVacancyError.INCORRECT_LOCATION);

    if (!data.contactEmail?.trim() || !/^\S+@\S+\.\S+$/.test(data.contactEmail)) {
        errors.push(ValidateVacancyError.INCORRECT_EMAIL);
    }

    if (!data.employment_type) errors.push(ValidateVacancyError.INCORRECT_EMPLOYMENT_TYPE);
    if (!data.experience_level) errors.push(ValidateVacancyError.INCORRECT_EXPERIENCE_LEVEL);
    if (!data.salary?.trim()) errors.push(ValidateVacancyError.INCORRECT_SALARY);

    if (!data.responsibilities || data.responsibilities.length === 0 || data.responsibilities.some(res => !res.trim())) {
        errors.push(ValidateVacancyError.EMPTY_RESPONSIBILITIES);
    }

    if (!data.requirements || data.requirements.length === 0 || data.requirements.some(req => !req.trim())) {
        errors.push(ValidateVacancyError.EMPTY_REQUIREMENTS);
    }

    if (!data.conditions || data.conditions.length === 0 || data.conditions.some(cond => !cond.trim())) {
        errors.push(ValidateVacancyError.EMPTY_CONDITIONS);
    }

    if (!data.skills || data.skills.length === 0 || data.skills.some(skill => !skill.trim())) {
        errors.push(ValidateVacancyError.EMPTY_SKILLS);
    }

    return errors;
}
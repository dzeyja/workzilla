import { Task } from "entities/Task"
import { TaskValidationError } from "../../types/createTaskFormSchema"

export const validateTask = (formData?: Task): TaskValidationError[] => {
    const errors: TaskValidationError[] = []

    if (!formData) {
        errors.push(TaskValidationError.NO_DATA)
        return errors
    }

    if (!formData.title || formData.title.length < 3) {
        errors.push(TaskValidationError.INCORRECT_TITLE)
    }

    if (!formData.description || formData.description.length < 10) {
        errors.push(TaskValidationError.INCORRECT_DESCRIPTION)
    }

    if (!formData.deadline) {
        errors.push(TaskValidationError.INCORRECT_DEADLINE)
    }

    if (!formData.priority) {
        errors.push(TaskValidationError.INCORRECT_PRIORITY)
    }

    if (!formData.status) {
        errors.push(TaskValidationError.INCORRECT_STATUS)
    }

    if (!formData.category) {
        errors.push(TaskValidationError.INCORRECT_CATEGORY)
    }

    if (!formData.requirements || formData.requirements.length === 0) {
        errors.push(TaskValidationError.EMPTY_TAGS)
    }

    if (!formData.estimatedTime) {
        errors.push(TaskValidationError.INCORRECT_ESTIMATED_TIME)
    }

    return errors
}
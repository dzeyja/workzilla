export type { VacancySchema, Vacancy, EmploymentType } from './model/types/vacancy'
export { vacancyReducer, vacancyActions } from './model/slices/vacancySlice'
export { fetchVacancies } from './model/services/fetchVacancies/fetchVacancies'
export { VacancyList } from './ui/VacancyList/VacancyList'
export { getVacancySearch, getVacancyOrder, 
    getVacancyIsLoading, getVacancyType, 
    getVacancySort, getVacancyData, getVacancyEmploymentType,
    getVacancyExperienceLevel } from './model/selectors/vacancySelector'
export { VacancyDetails } from './ui/VacancyDetails/VacancyDetails'
export { VacancyTypes } from './model/types/vacancy'
export { VacancySort } from './model/types/vacancy'
export { useGetVacancyDetails } from './api/getVacancyDetails'
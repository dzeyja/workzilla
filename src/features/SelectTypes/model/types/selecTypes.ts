export enum VacancyTypes {
    ALL = 'all',
    DEVELOPMENT = 'development',
    MARKETING = 'marketing',
    DESIGN = 'design',
    ANALYTICS = 'analytics'
}

export interface SelectTypesSchema {
    type: VacancyTypes
}
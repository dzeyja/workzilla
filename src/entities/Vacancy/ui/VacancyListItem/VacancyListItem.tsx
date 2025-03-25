import { Vacancy } from "../../model/types/vacancy";

interface VacancyListItemProps {
    vacancy: Vacancy
}

export const VacancyListItem = ({ vacancy }: VacancyListItemProps) => {
  
    return (
        <div className="p-8 bg-gray mb-4">
            <div className="text-primary text-xl">
                {vacancy.title}
            </div>
            <div className="font-bold">
                {vacancy.salary}
            </div>
            <div className="text-secondary">
                {vacancy.description}
            </div>
        </div>
    );
};
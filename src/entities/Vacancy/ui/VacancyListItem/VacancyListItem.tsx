import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { Vacancy } from "../../model/types/vacancy";
import Link from "next/link";

interface VacancyListItemProps {
    vacancy: Vacancy
}

export const VacancyListItem = ({ vacancy }: VacancyListItemProps) => {
    
    return (
        <Link href={`/vacancies/${vacancy.id}`}>
            <div className="p-8 cursor-pointer bg-gray mb-4 rounded-btn hover:scale-101 duration-300 hover:shadow-md duration-300">
                <Text title={vacancy.title} theme={TextTheme.PRIMARY} />
                <Text text={vacancy.salary} weight={TextWeight.MEDIUM} />
                <Text smallText={vacancy.description} theme={TextTheme.SECONdARY} />
            </div>
        </Link>
    );
};
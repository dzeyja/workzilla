import Link from "next/link";
import { Page } from "shared/ui/Page/Page";
import { HStack } from "shared/ui/Stack";

export default function MyVacanciesLayout({ children }: { children: React.ReactNode }) {
    
    return (
        <Page>
            <HStack gap="16" >
                <Link className="underline" href='/my-vacancies'>Список вакансии</Link>
                <Link className="underline" href='/my-vacancies/create'>Отклики</Link>
            </HStack>
            {children}
        </Page>
    );
}
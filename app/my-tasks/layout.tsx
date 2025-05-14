import Link from "next/link";
import { Page } from "shared/ui/Page/Page";
import { HStack } from "shared/ui/Stack";

export default function MyTasksLayout({ children }: { children: React.ReactNode }) {
    return (
        <Page>
            <HStack gap="16" >
                <Link className="underline" href='/my-tasks'>Список задач</Link>
                <Link className="underline" href='/my-tasks/create'>Создать задачу</Link>
            </HStack>
            {children}
        </Page>
    );
}
"use client"

import { getUserAuthData } from "entities/User";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Page } from "shared/ui/Page/Page";
import { HStack } from "shared/ui/Stack";

export default function MyTasksLayout({ children }: { children: React.ReactNode }) {
    const user = useSelector(getUserAuthData)
    const isCustomer = user?.role === 'customer'
    
    return (
        <Page>
            {isCustomer && (
                <HStack gap="16" >
                    <Link className="underline" href='/my-tasks'>Список задач</Link>
                    <Link className="underline" href='/my-tasks/create'>Создать задачу</Link>
                </HStack>
            )}
            {children}
        </Page>
    );
}
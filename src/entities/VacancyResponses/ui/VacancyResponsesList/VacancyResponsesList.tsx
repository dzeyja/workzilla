"use client";

import { useCallback } from "react";
import { useGetVacancyResponses, useUpdateVacancyResposeStatus } from "../../api/vacancyResponsesApi";
import Link from "next/link";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Loader } from "shared/ui/Loader/Loader";
import { HStack, VStack } from "shared/ui/Stack";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";

interface VacancyResponsesListProps {
    vacancyId?: string
}

export const VacancyResponsesList = (props: VacancyResponsesListProps) => {
    const { vacancyId } = props;
    const { data: vacancyResponses, isLoading, refetch } = useGetVacancyResponses(vacancyId || '');
    const [updateResponse] = useUpdateVacancyResposeStatus()

    const onAccept = useCallback(async (id: string) => {
        try {
            await updateResponse({
                id,
                status: "accepted"
            })
            await refetch()
        } catch (e) {
            console.error(e)
        }
    }, [refetch, updateResponse])

    const onReject = useCallback(async (id: string) => {
        try {
            await updateResponse({
                id,
                status: "rejected"
            })
            await refetch()
        } catch (e) {
            console.error(e)
        }
    }, [refetch, updateResponse])

    if(isLoading) {
        return (
            <VStack max justify="center" align="center" className="min-h-[400px] p-2 rounded-md border border-gray-300">
                <Loader />
            </VStack>
        )
    }

    return (
        <div className="max-h-[400px] overflow-y-auto p-2 rounded-md border border-gray-300">
            {vacancyResponses?.length ? (
                vacancyResponses.map(response => (
                    <VStack
                        gap="8"
                        max
                        key={response.id}
                        className="p-4 border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
                    >
                        <HStack max justify="between">
                            <Text text={response.userId} />
                            <Text text={response.status} theme={TextTheme.SECONdARY} />
                        </HStack>
                        <Text smallText={response.message} />
                        <HStack gap="8">
                            <Text weight={TextWeight.MEDIUM} smallText={'Ссылка на резюме:'} />
                            <Link className='text-primary underline' href={response.cvlink}>
                                {response.cvlink}
                            </Link>
                        </HStack>
                        <VStack>
                            <Text text="Специальность" />
                            <Text smallText={response.specialty} />
                        </VStack>
                        <VStack>
                            <Text text="Опыт работы" />
                            <Text smallText={response.experience} />
                        </VStack>
                        <HStack gap="8">
                            {response.status === 'pending' && (
                                <>
                                    <Button onClick={() => onAccept(response.id!)} theme={ButtonTheme.GREEN_CLEAR}>
                                        Принять отклик
                                    </Button>
                                    <Button onClick={() => onReject(response.id!)} theme={ButtonTheme.ERROR_CLEAR}>
                                        Отклонить отклик
                                    </Button>
                                </>
                            )}
                        </HStack>
                    </VStack>
                ))
            ) : (
                <Text text="Нет откликов" />
            )}
        </div>
    );
};

"use client"

import { getUserAuthData } from "entities/User";
import { useGetMyVacancyResponses } from "entities/VacancyResponses/api/vacancyResponsesApi";
import { useSelector } from "react-redux";


export const MyVacancyResponsesList = () => {
    const user = useSelector(getUserAuthData)
    const { data: myResponses, isLoading, error } = useGetMyVacancyResponses(user?.id)

    return (
        <>
            {myResponses?.map(response => (
                <div key={response.id} className="p-2 rounded-md border border-gray-300 mb-2">
                    <h3 className="text-lg font-semibold">{response.vacancyTitle}</h3>
                    <p className="text-gray-600">{response.status}</p>
                </div>
            ))}
        </>
    );
};
"use client";

import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface VacancyListItemSkeletonProps {
}

export const VacancyListItemSkeleton = (props: VacancyListItemSkeletonProps) => {
    return <Skeleton width={'100%'} height={200} border="10px" />
};
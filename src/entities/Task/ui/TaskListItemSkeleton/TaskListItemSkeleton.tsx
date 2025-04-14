import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { VStack } from "shared/ui/Stack";

export const TaskListItemSkeleton = () => {
    return (
        <VStack gap="8" max className="p-8 cursor-pointer bg-gray mb-4 rounded-btn hover:scale-101 duration-300 hover:shadow-md duration-300">
            <Skeleton width={300} height={20} border="10px" />
            <Skeleton width={200} height={18} border="10px" />
            <Skeleton width={'100%'} height={36} border="10px" />
        </VStack>
    )
};
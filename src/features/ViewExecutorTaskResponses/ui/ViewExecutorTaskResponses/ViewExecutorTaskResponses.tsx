import { getUserAuthData } from "entities/User"
import { useGetExecutorTaskResponses } from "features/ViewExecutorTaskResponses/api/getExecutorTaskResponses"
import { useSelector } from "react-redux"

export const ViewExecutorTaskResponses = () => {
    const user = useSelector(getUserAuthData)
    const {data: myTaskResponses, isLoading, error} = useGetExecutorTaskResponses(user?.id!)
    
    return (
        <div>
            {
                myTaskResponses?.map(response => (
                    <h1>
                        {response.taskId}
                    </h1>
                ))
            }
        </div>
    )
}

import { Button } from "@chakra-ui/react"
import { TaskList } from "../organism/TaskList"

export const TaskPage = (() => {
    return (
        <>
            <Button colorPalette='teal' variant="solid" >ADD</Button>
            <TaskList />
        </>
    )
})
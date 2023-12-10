import { useContext } from "react"
import { userContext } from "../../components/AuthRequired"

export default function ToDoList()
{
    const user = useContext(userContext);

    return (
        <>
            <h1>To do list!</h1>
            <h2>User id: {user?.id}</h2>
        </>
    )
}
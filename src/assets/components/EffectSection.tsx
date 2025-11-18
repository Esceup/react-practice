import { useEffect, useState } from "react"
import useInput from "../useInput";

interface User {
    id: number;
    name: string;
}

export function EffectSection() {
    const input = useInput()
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        // простые запросы, функции, setInterval, localStorage лучше использовать внутри useEffect или использовать useCallback 
         async function getUsers() {
           try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const getUsers = await response.json()
            setUsers(getUsers)
            
           } catch(error) {
                console.log('Error fetching users:', error)
           } finally {
                setLoading(false)
           }
        }

        getUsers()

    }, [])

    return (
        <>
            {loading && <p>Загрузка...</p>}
            {!loading && 
            <>  
                <label htmlFor="filterUsers" className="control">Поиск пользователя</label>
                <input name="filterUsers" type="text" className="control" {...input} />
            <ul>
                    {users
                    .filter(item => item.name.toLowerCase().includes(input.value.toLowerCase()))
                    .map((user) => (
                        <li key={user.id}>{user.id}. {user.name}</li>
                ))}
                </ul>
            </>
            }
        </>
    )
}
import { useState } from "react"
import logo from '../img/React_Logo.png'
export function Header() {
    const [time, setTime] = useState(new Date())

    setInterval(() => setTime(new Date()), 1000)

    return (
        <>
            <header>
                <img src={logo} alt="React" />
                <h3>React project</h3>
                <time>Время сейчас: {time.toLocaleTimeString()}</time>
            </header>

        </>
    )
}
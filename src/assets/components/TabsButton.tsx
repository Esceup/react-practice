import { useState } from "react";
import Button from "./Button";
import { differences } from "../../data"

type ContentType = keyof typeof differences

export function TabsButton() {
const [contentType, setContentType] = useState<ContentType | null>('way')

function handleToggleButton(type: ContentType) {
    setContentType(type)
}

    return (
        <>
            <h3>Плюсы React</h3>
            <div className="btnBlock">
                <Button onClick={() => handleToggleButton('way')} isActive={contentType === 'way'}>Компонентный подход</Button>
                <Button onClick={() => handleToggleButton('easy')} isActive={contentType === 'easy'}>Virtual DOM для производительности</Button>
                <Button onClick={() => handleToggleButton('program')} isActive={contentType === 'program'}>JSX: HTML внутри JavaScript.</Button>
            </div>
            <div>{contentType && differences[contentType]}</div>
        </>
    )
}
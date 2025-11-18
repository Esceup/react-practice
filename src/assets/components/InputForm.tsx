import { memo, useState, type ChangeEvent } from "react";
import Button from "./Button";

interface Name {
    name: string;
    setName: (event: string) => void;
}

export function StateVsRef() {
    return (
        <>
            <h3>value: </h3>
            <input type="text" />
        </>
    )
}

export const InputForm = memo(function InputForm({ name, setName }: Name) {
 
 const [reason, setReason] = useState('furniture')
 const [hasError, setHasError] = useState(false)

 function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
    setHasError(event.target.value.trim().length < 3)
 }
    return (
        <div>
            <label htmlFor="name" className="control">Имя</label>
            <input 
                type="text" 
                id="name" 
                className='control' 
                value={name}
                style={{
                    border: hasError ? '1px solid red' : ''
                }}
                onChange={handleNameChange}
            />
            
            <label htmlFor="reason" className="control">Тема обращения</label>
            <select id="reason" className="control" value={reason} onChange={event => setReason(event.target.value)}>
                <option value='error'>Ошибка оформления заказа</option>
                <option value='furniture'>Нужна помощь в подборе мебели</option>
                <option value='designer'>Нужен дизайн квартиры</option>
            </select>
            <Button className="control">Отправить</Button>
           <pre>Name: {name}</pre>
           <pre>Reason: {reason}</pre>
        </div>
    )
})
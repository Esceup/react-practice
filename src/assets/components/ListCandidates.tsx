import { data } from "../../data"

export function ListCandidates() {
    return (
        <>
            <ul>
            {data.map((item) => (
                <li key={item.title}>
                <p>{item.title}</p>
                <p>{item.desc}</p>
                </li>
            ))}
            </ul>
        </>
    )
}
import { data } from '../../data'


export function ListPosts() {
    return (       
        <>
            <ul>
                {data.map((item, index) => (
                    <li key={index} className="listItem">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </li>
                ))}
            </ul>
        </>     
    )
}
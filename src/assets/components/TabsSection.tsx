import { memo, useCallback } from "react";
import Button from "./Button";

interface Tab {
    active: string;
    onChange: (current: string) => void;
}

function TabsSectionContent({active, onChange}: Tab) {

    const handleClickMain = useCallback(() => onChange('main'), [onChange])
    const handleClickSearch = useCallback(() => onChange('search'), [onChange])
    const handleClickFeedback = useCallback(() => onChange('feedback'), [onChange])


    return (
        <>
            <Button isActive={active === 'main'} onClick={handleClickMain}>Главная</Button>           
            <Button isActive={active === 'search'} onClick={handleClickSearch}>Поиск кандидатов</Button>
            <Button isActive={active === 'feedback'} onClick={handleClickFeedback}>Обратная связь</Button>
        </>
    )
}

export const TabsSection = memo(TabsSectionContent)
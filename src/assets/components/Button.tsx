import { memo } from "react";


interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    isActive?: boolean;
}


const Button = memo(function Button({children, isActive, ...props}: ButtonProps) {
    return (
        <button {...props} className={isActive ? 'active btn' : 'btn'} >{children}</button>
    )
})

export default Button


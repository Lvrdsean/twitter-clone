import { ReactNode } from "react";
import "./Button.scss";

type ButtonProps = {
    onClick: () => void;
    children: ReactNode;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <button
            className={`button ${className}`}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </button>
    );
};

export default Button;

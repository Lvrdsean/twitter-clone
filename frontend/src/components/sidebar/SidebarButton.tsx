import "./SidebarButton.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

interface SidebarButtonProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
    to?: string; // optional route
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
    icon,
    label,
    active,
    onClick,
    to,
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to); // navigate to route
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <Button
            onClick={handleClick}
            className={`sidebar_button ${
                active ? "sidebar_button--active" : ""
            }`}
        >
            {icon}
            <span>{label}</span>
        </Button>
    );
};

export default SidebarButton;

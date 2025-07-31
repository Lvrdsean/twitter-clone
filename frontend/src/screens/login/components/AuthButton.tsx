import "./AuthButton.scss";
import Button from "../../../components/button/Button";

type AuthButtonProps = {
    onClick: () => void;
    icon: string;
    children: React.ReactNode;
    className?: string;
};

const AuthButton: React.FC<AuthButtonProps> = ({
    onClick,
    icon,
    children,
    className = "",
}) => (
    <Button onClick={onClick} className={className}>
        <img src={icon} className="auth__icon" alt="icon" />
        {children}
    </Button>
);

export default AuthButton;

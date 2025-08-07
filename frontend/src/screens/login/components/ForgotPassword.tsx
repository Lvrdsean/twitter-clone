import "./ForgotPassword.scss";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";

type ForgotPasswordProps = {
    identifier: string;
    onIdentifierChange: (value: string) => void;
    onSubmit: () => void;
};

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
    identifier,
    onIdentifierChange,
    onSubmit,
}) => {
    return (
        <div className="forgot_password__container">
            <h1>Find your X account</h1>
            <p>
                Enter the email, phone number, or username associated with your
                account to change your password.
            </p>
            <Input
                placeholder="Email, phone number, or username"
                value={identifier}
                onChange={(e) => onIdentifierChange(e.target.value)}
            />
            <Button className="p1-b forgot_password__button" onClick={onSubmit}>
                Next
            </Button>
        </div>
    );
};

export default ForgotPassword;

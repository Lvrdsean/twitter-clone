import "./SignUp.scss";
import Button from "../../../components/button/Button";
import Google from "@/assets/images/google-logo.png";
import Apple from "@/assets/images/apple-logo.png";
import AuthButton from "../components/AuthButton";

type SignUpProps = {
    onCreateAccountClick: () => void;
    onLogInClick: () => void;
};

const SignUp: React.FC<SignUpProps> = ({
    onCreateAccountClick,
    onLogInClick,
}) => {
    return (
        <>
            <h1>Join X today</h1>
            <AuthButton
                onClick={() => {}}
                icon={Google}
                className="signup__button"
            >
                Sign up with Google
            </AuthButton>
            <AuthButton
                onClick={() => {}}
                icon={Apple}
                className="signup__button--apple"
            >
                Sign up with Apple
            </AuthButton>
            <div className="signup__divider">
                <p>OR</p>
            </div>
            <Button
                onClick={onCreateAccountClick}
                className="signup__button--create_account"
            >
                Create account
            </Button>
            <p className="p2-r signup__terms">
                By signing up, you agree to absolutely
                <span className="signup__terms--blue">nothing</span> because
                this is a<span className="signup__terms--blue">clone.</span>
            </p>
            <p className="p1-r signup__terms--no_account">
                Have an account already?
                <Button onClick={onLogInClick} className="p1-r signup__link">
                    Log in
                </Button>
            </p>
        </>
    );
};

export default SignUp;

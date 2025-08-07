import "./SignInStepOne.scss";
import Button from "../../../components/button/Button";
import Google from "@/assets/images/google-logo.png";
import Apple from "@/assets/images/apple-logo.png";
import AuthButton from "../components/AuthButton";
import Input from "../../../components/input/Input";

type SignInStepOneProps = {
    identifier: string;
    identifierError: string;
    onChange: (value: string) => void;
    onNextClick: () => void;
    onForgotPassword: () => void;
    onSignUpClick: () => void;
};

const SignInStepOne: React.FC<SignInStepOneProps> = ({
    identifier,
    identifierError,
    onChange,
    onNextClick,
    onForgotPassword,
    onSignUpClick,
}) => {
    return (
        <>
            <AuthButton
                onClick={() => {}}
                icon={Google}
                className="step_one__button"
            >
                Sign in with Google
            </AuthButton>
            <AuthButton
                onClick={() => {}}
                icon={Apple}
                className="step_one__button--apple"
            >
                Sign in with Apple
            </AuthButton>

            <div className="step_one__divider">
                <p>OR</p>
            </div>

            <Input
                placeholder="Phone, email, or username"
                value={identifier}
                onChange={(e) => onChange(e.target.value)}
                hasError={!!identifierError}
                error={identifierError}
                onEnterPress={onNextClick}
            />

            <Button
                onClick={onNextClick}
                className="p1-b step_one__button--next"
            >
                Next
            </Button>

            <Button
                onClick={onForgotPassword}
                className="p1-b step_one__button--forgot_password"
            >
                Forgot password?
            </Button>

            <p className="p1-r step_one__terms">
                Don't have an account?
                <Button onClick={onSignUpClick} className="p1-r step_one__link">
                    Sign up
                </Button>
            </p>
        </>
    );
};

export default SignInStepOne;

import "./SignInStepTwo.scss";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";

type SignInStepTwoProps = {
    identifier: string;
    password: string;
    passwordError?: string;
    onPasswordChange: (value: string) => void;
    onForgotPassword: () => void;
    onLogin: () => void;
    onSignUpClick: () => void;
};

const SignInStepTwo: React.FC<SignInStepTwoProps> = ({
    identifier,
    password,
    passwordError,
    onPasswordChange,
    onForgotPassword,
    onLogin,
    onSignUpClick,
}) => {
    return (
        <div className="step_two__container">
            <Input placeholder="Phone, email, or username" value={identifier} />
            <Input
                placeholder="Password"
                type="password"
                isPassword
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                hasError={!!passwordError}
                error={passwordError}
                onEnterPress={onLogin}
            />
            <Button
                onClick={onForgotPassword}
                className="p1-r step_two__link--forgot_password"
            >
                Forgot password?
            </Button>
            <Button onClick={onLogin} className="p1-b step_two__button">
                Log in
            </Button>
            <p className="p1-r step_two__terms">
                Don't have an account?
                <Button onClick={onSignUpClick} className="p1-r step_two__link">
                    Sign up
                </Button>
            </p>
        </div>
    );
};

export default SignInStepTwo;

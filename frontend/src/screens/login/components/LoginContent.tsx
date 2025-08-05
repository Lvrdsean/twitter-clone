import "./LoginContent.scss";
import { ReactNode } from "react";
import Button from "../../../components/button/Button";
import Logo from "@/assets/images/logo-white.png";
import Google from "@/assets/images/google-logo.png";
import Apple from "@/assets/images/apple-logo.png";
import AuthButton from "../components/AuthButton";

type LoginContentProps = {
    children: ReactNode;
    onOpenCreateModal: () => void;
    onOpenSignInModal: () => void;
};

const LoginContent: React.FC<LoginContentProps> = ({
    children,
    onOpenCreateModal,
    onOpenSignInModal,
}) => {
    return (
        <div className="content__container">
            <img src={Logo} className="content__logo" alt="logo" />
            <h2 className="content__account">Create an account</h2>
            <AuthButton
                onClick={() => {}}
                icon={Google}
                className="content__button"
            >
                Sign up with Google
            </AuthButton>
            <AuthButton
                onClick={() => {}}
                icon={Apple}
                className="content__button"
            >
                Sign up with Apple
            </AuthButton>
            <div className="content__divider">
                <p>OR</p>
            </div>
            <Button
                onClick={onOpenCreateModal}
                className="content__button--blue"
            >
                Create account
            </Button>
            <p className={`p3-r ${"content__terms"}`}>
                By signing up, you agree to absolutely
                <span className="content__terms--blue">nothing</span>
                because this is a
                <span className="content__terms--blue">clone.</span>
            </p>
            <p className={`p1-b ${"content__account--own"}`}>
                Already have an account?
            </p>
            <Button
                onClick={onOpenSignInModal}
                className="content__button--blue_text"
            >
                Sign in
            </Button>
            {children}
        </div>
    );
};

export default LoginContent;

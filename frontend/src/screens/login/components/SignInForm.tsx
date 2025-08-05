import "./SignInForm.scss";
import Button from "../../../components/button/Button";
import Logo from "@/assets/images/logo-white.png";
import Google from "@/assets/images/google-logo.png";
import Apple from "@/assets/images/apple-logo.png";
import Modal from "../../../components/modal/Modal";
import { useState } from "react";
import Input from "../../../components/input/Input";

type SignInFormProps = {
    isOpen: boolean;
    onClose: () => void;
    onOpenCreateModal: () => void;
};

const SignInForm: React.FC<SignInFormProps> = ({
    isOpen,
    onClose,
    onOpenCreateModal,
}) => {
    // state
    const [isSigningIn, setIsSigningIn] = useState(true);
    const [identifier, setIdentifier] = useState("");

    // event handlers
    const handleCloseSignInModal = () => {
        onClose();
        setIsSigningIn(true);
    };

    const handleOpenCreateModal = () => {
        onClose();
        onOpenCreateModal();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleCloseSignInModal}
            className="signin__form"
        >
            <div className="signin__container">
                <img src={Logo} className="signin__logo" alt="logo" />

                {isSigningIn ? (
                    <>
                        <h1>Sign in to X</h1>
                        <Button onClick={() => {}} className="signin__button">
                            <img
                                src={Google}
                                className="signin__logo--apple_google"
                                alt="google"
                            />
                            Sign in with Google
                        </Button>
                        <Button
                            onClick={() => {}}
                            className="signin__button--apple"
                        >
                            <img
                                src={Apple}
                                className="signin__logo--apple_google"
                                alt="apple"
                            />
                            Sign in with Apple
                        </Button>
                        <div className="signin__divider">
                            <p>OR</p>
                        </div>
                        <Input
                            placeholder="Phone, email, or username"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                        <Button
                            onClick={() => {}}
                            className="p1-b signin__button--next"
                        >
                            Next
                        </Button>
                        <Button
                            onClick={() => {}}
                            className="p1-b signin__button--forgot_password"
                        >
                            Forgot password?
                        </Button>
                        <p className="p1-r signin__terms--no_account">
                            Don't have an account?
                            <Button
                                onClick={() => setIsSigningIn(false)}
                                className="p1-r signin__link"
                            >
                                Sign up
                            </Button>
                        </p>
                    </>
                ) : (
                    <>
                        <h1>Join X today</h1>
                        <Button onClick={() => {}} className="signin__button">
                            <img
                                src={Google}
                                className="signin__logo--apple_google"
                                alt="google"
                            />
                            Sign up with Google
                        </Button>
                        <Button
                            onClick={() => {}}
                            className="signin__button--apple"
                        >
                            <img
                                src={Apple}
                                className="signin__logo--apple_google"
                                alt="apple"
                            />
                            Sign up with Apple
                        </Button>
                        <div className="signin__divider">
                            <p>OR</p>
                        </div>
                        <Button
                            onClick={handleOpenCreateModal}
                            className="signin__create_account"
                        >
                            Create account
                        </Button>
                        <p className="p2-r signin__terms">
                            By signing up, you agree to absolutely
                            <span className="signin__terms--blue">
                                nothing
                            </span>{" "}
                            because this is a
                            <span className="signin__terms--blue">clone.</span>
                        </p>
                        <p className="p1-r signin__terms--no_account">
                            Have an account already?
                            <Button
                                onClick={() => setIsSigningIn(true)}
                                className="p1-r signin__link"
                            >
                                Log in
                            </Button>
                        </p>
                    </>
                )}
            </div>
        </Modal>
    );
};

export default SignInForm;

import "./SignInForm.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import Logo from "@/assets/images/logo-white.png";
import SignInStepOne from "./SignInStepOne";
import SignInStepTwo from "./SignInStepTwo";
import SignUp from "./SignUp";

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
    // hooks
    const navigate = useNavigate();

    // state
    const [isSigningIn, setIsSigningIn] = useState(true);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [identifier, setIdentifier] = useState("");
    const [identifierError, setIdentifierError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // event handlers
    const handleCloseSignInModal = () => {
        onClose();
        setIsSigningIn(true);
        setShowPasswordModal(false);
        setIdentifier("");
        setIdentifierError("");
        setPassword("");
        setPasswordError("");
    };

    const handleOpenCreateModal = () => {
        onClose();
        onOpenCreateModal();
    };

    const handleNextClick = () => {
        if (identifier.trim().toLowerCase() === "test@email.com") {
            setIdentifierError("");
            setShowPasswordModal(true);
        } else {
            setIdentifierError("We couldn’t find your account.");
            setShowPasswordModal(false);
        }
    };

    const handleLogin = () => {
        if (password === "password") {
            setPasswordError("");
            navigate("/home");
        } else {
            setPasswordError("Incorrect password. Please try again.");
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleCloseSignInModal}
            className={
                showPasswordModal ? "signin__form--password" : "signin__form"
            }
        >
            <div className="signin__container">
                <img src={Logo} className="signin__logo" alt="logo" />

                {isSigningIn ? (
                    <>
                        <h1
                            className={
                                showPasswordModal ? "signin__header" : ""
                            }
                        >
                            {showPasswordModal
                                ? "Enter your password"
                                : "Sign in to X"}
                        </h1>

                        {!showPasswordModal ? (
                            <SignInStepOne
                                identifier={identifier}
                                identifierError={identifierError}
                                onChange={(val) => {
                                    setIdentifier(val);
                                    setIdentifierError("");
                                }}
                                onNextClick={handleNextClick}
                                onForgotPassword={() => {}}
                                onSignUpClick={() => setIsSigningIn(false)}
                            />
                        ) : (
                            <SignInStepTwo
                                identifier={identifier}
                                password={password}
                                passwordError={passwordError}
                                onPasswordChange={setPassword}
                                onForgotPassword={() => {}}
                                onLogin={handleLogin}
                                onSignUpClick={() => setIsSigningIn(false)}
                            />
                        )}
                    </>
                ) : (
                    <SignUp
                        onCreateAccountClick={handleOpenCreateModal}
                        onLogInClick={() => setIsSigningIn(true)}
                    />
                )}
            </div>
        </Modal>
    );
};

export default SignInForm;

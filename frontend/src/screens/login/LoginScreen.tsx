import "./LoginScreen.scss";
import { useState } from "react";
import LoginContent from "./components/LoginContent";
import CreateAccountForm from "./components/CreateAccountForm";
import SignInForm from "./components/SignInForm";
import Footer from "./components/Footer";

const Login = () => {
    // state
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isSignInModalOpen, setSignInModalOpen] = useState(false);

    return (
        <div className="login__screen">
            <LoginContent
                onOpenCreateModal={() => setCreateModalOpen(true)}
                onOpenSignInModal={() => setSignInModalOpen(true)}
            >
                {isCreateModalOpen && !isSignInModalOpen && (
                    <CreateAccountForm
                        isOpen={isCreateModalOpen}
                        onClose={() => setCreateModalOpen(false)}
                    />
                )}
                {isSignInModalOpen && !isCreateModalOpen && (
                    <SignInForm
                        isOpen={isSignInModalOpen}
                        onClose={() => setSignInModalOpen(false)}
                        onOpenCreateModal={() => setCreateModalOpen(true)}
                    />
                )}
            </LoginContent>
            <Footer />
        </div>
    );
};

export default Login;

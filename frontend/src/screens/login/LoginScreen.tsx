import "./LoginScreen.scss";
import Logo from "@/assets/images/logo-white.png";

const Login = () => {
    return (
        <div className="login__screen">
            <div className="login__content">
                <img src={Logo} className="login__logo" alt="logo" />
            </div>
        </div>
    );
};

export default Login;

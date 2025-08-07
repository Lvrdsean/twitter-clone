import "./HomeScreen.scss";
import Logo from "@/assets/images/logo-white.png";

const Home = () => {
    return (
        <div className="home__screen">
            <img src={Logo} className="home__logo" alt="logo" />
        </div>
    );
};

export default Home;

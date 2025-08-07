import { Routes, Route } from "react-router-dom";
import Login from "./screens/login/LoginScreen";
import Home from "./screens/home/HomeScreen";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
};

export default App;

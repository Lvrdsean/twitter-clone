import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@sass/index.scss";
import Login from "./screens/login/LoginScreen";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Login />
    </StrictMode>
);

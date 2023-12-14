import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/main";

function RooteRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RooteRoute;

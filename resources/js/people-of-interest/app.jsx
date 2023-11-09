import React from "react";
import Homepage from "./homepage";
import People from "../people/People";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Missions from "../Missions/Missions";
import Register from "../Register";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/people" element={<People />} />
                <Route path="/missions" element={<Missions />} />
                <Route path="/register-form" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

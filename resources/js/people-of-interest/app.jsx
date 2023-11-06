import React from "react";
import Homepage from "./homepage";
import People from "../people/People";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/people" element={<People />} />
            </Routes>
        </BrowserRouter>
    );
}

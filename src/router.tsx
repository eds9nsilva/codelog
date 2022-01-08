import React from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomeIndex from "./pages/home";

export default function RoutesPag(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeIndex/>} />

            </Routes>
        </BrowserRouter>


    )
}
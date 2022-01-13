import React from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import HomeIndex from "./pages/home";
import Manutencao from "./pages/manutencao";

export default function RoutesPag(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeIndex/>} />
                <Route path='/manutencao' element={<Manutencao/>} />


            </Routes>
        </BrowserRouter>


    )
}
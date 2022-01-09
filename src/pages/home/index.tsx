import React from 'react';
import Navbar from './componets/navbar';
import Header from './componets/header';
import FeatureIndex from './componets/feature';
export default function HomeIndex(){
    return(
        <>
            <Navbar/>
            <Header/>
            <FeatureIndex/>
        </>
    );
}
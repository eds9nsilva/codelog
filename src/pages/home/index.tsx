import React from 'react';
import Navbar from './componets/navbar';
import Header from './componets/header';
import FeatureIndex from './componets/feature';
import QuemSomos from './componets/quemSomos';
export default function HomeIndex(){
    return(
        <>
            <Navbar/>
            <Header/>
            <FeatureIndex/>
            <QuemSomos/>
        </>
    );
}
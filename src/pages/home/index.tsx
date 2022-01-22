import React from 'react';
import Navbar from './componets/navbar';
import Header from './componets/header';
import FeatureIndex from './componets/feature';
import QuemSomos from './componets/quemSomos';
import Servico from './componets/servico';
import Marcas from './componets/marcas';
import Contato from './componets/contato';
import Fooater from './componets/footer';
export default function HomeIndex(){
    return(
        <>
            <Navbar/>
            <Header/>
            <FeatureIndex/>
            <QuemSomos/>
            <Servico/>
            <Marcas/>
            <Contato/>
            <Fooater/>
        </>
    );
}
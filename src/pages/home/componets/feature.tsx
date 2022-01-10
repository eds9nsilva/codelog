import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import * as React from 'react'
import { FaNode, FaReact } from "react-icons/fa";
import { SiAdobephotoshop, SiTypescript, SiExpress, SiChakraui } from "react-icons/si";
import { Feature } from './featureIndex'


export default function featureIndex(){
  return(
    <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
      
      <Text fontSize='4xl' align={'center'}>Algumas das Tecs que utilizamos</Text>
      <br></br>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
             
      <Feature title="NodeJs" icon={<FaNode />}>
      Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.
      </Feature>
      <Feature title="Typescript" icon={<SiTypescript />}>
      TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.
      </Feature>
      <Feature title="React" icon={<FaReact />}>
      O React é uma biblioteca JavaScript de código aberto. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Airbnb, SeatGeek, HelloSign, Walmart.
      </Feature>
      <Feature title="Chakra ui" icon={<SiChakraui/>}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore.
      </Feature>
      <Feature title="Express" icon={<SiExpress />}>
      Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web. 
      </Feature>
      <Feature title="Photoshop" icon={<SiAdobephotoshop />}>
      Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster desenvolvido pela Adobe Systems.
      </Feature>
    </SimpleGrid>
  </Box>
  );
}

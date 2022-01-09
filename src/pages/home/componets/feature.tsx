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
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus.
      </Feature>
      <Feature title="Typescript" icon={<SiTypescript />}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore.
      </Feature>
      <Feature title="React" icon={<FaReact />}>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus.
      </Feature>
      <Feature title="Chakra ui" icon={<SiChakraui/>}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore.
      </Feature>
      <Feature title="Express" icon={<SiExpress />}>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus.
      </Feature>
      <Feature title="Photoshop" icon={<SiAdobephotoshop />}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore.
      </Feature>
    </SimpleGrid>
  </Box>
  );
}

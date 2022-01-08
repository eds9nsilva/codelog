import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import RoutesPag from './router';
function App() {
  return (
    <ChakraProvider>
      <RoutesPag />
  </ChakraProvider>
  );
}

export default App;

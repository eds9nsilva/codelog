import { Link } from 'react-router-dom'
import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                CodeLog
              </Text>
              <br />{' '}
              <Text color={'gray.600'} as={'span'}>
                Designs e Projetos
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
             Está precisando de um web site? Ou até mesmo de designs para publicações nas redes sociais?
             Aqui na Agência CodeLog nós podemos te ajudar!
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <Link to='/contato'>
                    <Button
                        rounded={'full'}
                        bg={'gray.600'}
                        color={'white'}
                        _hover={{
                        bg: 'gray.800',
                        }}>
                        Fale Conosco
                    </Button>
              </Link>
              <Button rounded={'full'}>Pedir Orçamento</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }
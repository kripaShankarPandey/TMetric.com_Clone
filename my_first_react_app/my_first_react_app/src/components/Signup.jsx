import {
    Button,
    Flex,
    FormControl,
    FormLabel,
  Text,
    Input,
    Stack,
    Image,
    Box,
    Link,
    HStack,
  } from '@chakra-ui/react';
  
  export default function Signup() {
    return (
    <Box  bg="#f6f7f8" h="100vh" w="100%">
        <Box border="1px solid rgb(242,245,252)">
            <Stack w="80%" h="100vh" m="auto" bg="white"  direction={{ base: 'column', md: 'row' }}>
        <Flex  flex={1} mt="30px" justify={'center'}>
          <Stack spacing={3} w={'full'} maxW={'md'}>
            <Flex justifyContent="center" >
            <Image  w="50%" src="https://id.tmetric.com/images/tmetric_logo_and_text.svg" alt="logo"/>
            </Flex>
          
            <Text textAlign="center" fontSize={'3xl'}>Create  your account</Text>
            <FormControl id="name">
              <FormLabel>Enter Full Name</FormLabel>
              <Input type="text" placeholder="John Smith" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="johnsmit@masaischool.com" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder='Enter your password' />
            </FormControl>
            <Stack spacing={6}>
              <Button colorScheme={'blue'} variant={'solid'}>
                Sign up
              </Button>
            </Stack>
            <Text textAlign="center">or</Text>
            <HStack border="1px solid rgb(216, 211, 210)" borderRadius="4px" justifyContent="center" p="5px">
            <Image src="https://id.tmetric.com/images/google_logo.svg" alt="icon"/>
            <Text>Sign Up with Google</Text>
            </HStack>
            <HStack border="1px solid rgb(216, 211, 210)" borderRadius="4px" justifyContent="center" p="5px">
            <Image src="https://id.tmetric.com/images/microsoft_logo.svg" alt="icon"/>
            <Text>Sign Up with Microsoft</Text>
            </HStack>
            <HStack border="1px solid rgb(216, 211, 210)" borderRadius="4px" justifyContent="center" p="5px">
            <Image src="https://id.tmetric.com/images/apple_logo.svg" alt="icon"/>
            <Text>Sign Up with Apple</Text>
            </HStack>
            <HStack>
            <Text mr="-4px">Already have an account? </Text>
            <Link >Log In</Link>
            </HStack>
            
          </Stack>
        </Flex>
        <Flex  bg="#f2f5fc" flex={1} >
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://id.tmetric.com/images/side_image_register.svg'
            }
          />
        </Flex>
            </Stack>
        </Box>
    </Box>
    );
  }
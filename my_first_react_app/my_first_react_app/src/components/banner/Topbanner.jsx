import { Box ,Heading,Image,Input,InputGroup,InputLeftElement,Text, Button, HStack} from "@chakra-ui/react";

// import { MdSettings } from 'react-icons/md'
import { EmailIcon } from '@chakra-ui/icons'


const Topbanner=()=>{
    return(
        <Box display="flex"  bg="rgb(255,240,184)" pt="31px">

            <Box  w="42vw"  >
                <Box   w="75%" h="70%" m="auto" mt="7%">
                    <Heading as="h1" size="3xl" >
                    Empower your 
                    </Heading>
                    <Heading as="h1" size="3xl">
                    Team with Time
                    </Heading>
                    <Heading as="h1" size="3xl" >
                   Tracking
                    </Heading>
                    <Heading as="h3" size="20px" mt="10px" noOfLines={2}>
                    TMetric streamlines your team work so you can focus on what matters 
                    </Heading>
                    <InputGroup size="md"  mt="10px" bg="white">
                        <InputLeftElement
                        pointerEvents='none'
                        children={<EmailIcon color='blue.500' />}
                        />
                        <Input type='email' placeholder='Enter your email '  />
                    </InputGroup>
                    <HStack gap="20px"   mt="15px">
                        <Button colorScheme="blue" w="40%">Get started</Button>
                        <Text>Fully Fuction 30-Day Trail</Text>
                    </HStack>
                </Box>
            </Box>
            
            <Box  w="58vw">
                <Image src="https://tmetric.com/media/nb3imgh0/img-home-heading.svg" alt="banner"/>
            </Box>
            
        </Box>

    );

}
export default Topbanner;
import { Flex, Spacer ,Box,Heading,Button,ButtonGroup ,Image} from '@chakra-ui/react'
import { MdBuild , MdCall } from "react-icons/md";
import { Icon } from '@chakra-ui/react';
const Navbar=()=>{
    return(
<Flex minWidth='max-content' justifyContent="space-arount" alignItems='center' gap='2'bg="#fff0b8">
  <Flex ml="3vw" p='2' border="1px solid red" w="20%" alignItems="center">
    <Image src="https://tmetric.com/images/tmetric_logo_with_text.svg" alt="ok" />
    <Button   ml="5%">EN</Button>
    <Button leftIcon={<MdBuild />} colorScheme='pink' variant='outline'>
    EN
  </Button>
  </Flex>
  <Spacer />
  <ButtonGroup gap='2' mr="2vw" border="1px solid red" w="40%" display="flex" justifyContent="space-between" m="auto">
  <Button colorScheme='teal' variant='link' color="black"> Why TMetric</Button>
  <Button colorScheme='teal' variant='link' color="black"> Apps and Intregations</Button>
  <Button colorScheme='teal' variant='link' color="black"> Pricing</Button>
  <Button colorScheme='teal' variant='link' color="black"> Support</Button>
  <Button colorScheme='teal' variant='link' color="black"> Blog</Button>
   
  </ButtonGroup>
  <ButtonGroup gap='2' mr="2vw" border="1px solid red" >
  <Button colorScheme='teal' variant='link' color="black"> Log in</Button>
    <Button colorScheme='blue' variant="outline" _hover={{ bg: "blue",color: "white" }}  >Sign Up</Button>
  </ButtonGroup>
</Flex>
);
}
export default Navbar;
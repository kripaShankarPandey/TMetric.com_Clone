import { Flex ,Button,ButtonGroup ,Image, HStack} from '@chakra-ui/react'
// import { HiGlobeAlt } from "react-icons/fa";
import { Icon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {NavLink} from "react-router-dom";
const Navbar=()=>{
  //TO make position sticky
  // sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }}>
    return(
<HStack minWidth='max-content' justifyContent="space-between" alignItems='center' gap='2' bg="#fff0b8">
  <Flex ml="3vw" p='2'  w="20%" alignItems="center">
  <NavLink to="/"><Image src="https://tmetric.com/images/tmetric_logo_with_text.svg" alt="ok" /></NavLink>
    <Button leftIcon={<Icon as={MdSettings} />} colorScheme='WhiteAlpha 800'  variant='outline' size="sm" ml="2%" _hover={{bg: "whitesmoke",color: "black" }}>
    EN
  </Button>

  </Flex>
  <ButtonGroup gap='2' mr="2vw"  w="40%" display="flex" justifyContent="space-between" m="auto">
  <Button rightIcon={<Icon as={ChevronDownIcon} />} colorScheme='teal' variant='unstyled' color="black"  _hover={{color: "blue" }}> Why TMetric</Button>
  <Button  rightIcon={<Icon as={ChevronDownIcon} />} colorScheme='teal' variant='unstyled' color="black"  _hover={{color: "blue" }}> Apps and Intregations</Button>
  <NavLink to="/pricing"> <Button colorScheme='teal' variant='unstyled' color="black"  _hover={{color: "blue" }}> Pricing</Button> </NavLink>
  <Button colorScheme='teal' variant='unstyled' color="black"  _hover={{color: "blue" }}> Support</Button>
  <Button colorScheme='teal' variant='unstyled' color="black"  _hover={{color: "blue" }}> Blog</Button>
   
  </ButtonGroup>
  <ButtonGroup gap='2' pr="1.5vw"  >
  <NavLink to="/login"> <Button colorScheme='teal' variant='unstyled' color="black" _hover={{color: "blue" }}> Log in</Button></NavLink> 
  
  <NavLink to="/login"><Button colorScheme='blue' variant="outline" _hover={{ bg: "blue",color: "white" }}  >Sign Up</Button></NavLink>
  </ButtonGroup>
</HStack>
);
}
export default Navbar;
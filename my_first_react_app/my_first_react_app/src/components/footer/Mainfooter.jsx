import {Box,HStack,Image,Text,Link, VStack,Stack} from "@chakra-ui/react"
import { FaChrome,FaSafari,FaEdge,FaFirefox,FaDesktop,FaApple,FaAndroid,FaYoutube,FaLinkedin,FaTwitterSquare,FaFacebookSquare } from "react-icons/fa";
const Mainfooter=()=>{
 return(
    <Box bg="#ebedf0" border="1px solid #ebedf0" fontFamily='
    PTRootUIMedium, sans-serif' >
        <Box w="90%" m="auto"  >
            <Stack direction="row" gap="7%" h="260px" mt="50px">
                <Box>
                    <Image src="https://tmetric.com/images/tmetric_logo_with_text.svg"/>
                </Box>
                <VStack align="left">
                    <Text fontWeight="bold">Application</Text>
                    <HStack> <FaDesktop/><Link>Desktop</Link></HStack>
                    <HStack> <FaApple/><Link>iOS</Link></HStack>
                    <HStack> <FaAndroid/><Link>Andriod</Link></HStack>
                
                </VStack>
                <VStack align="left">
                    <Text fontWeight="bold">Browser Extensions</Text>
                    <HStack> <FaChrome/><Link>Chrome</Link></HStack>
                    <HStack> <FaFirefox/><Link>Firefox</Link></HStack>
                    <HStack> <FaEdge/><Link>Edge</Link></HStack>
                    <HStack> <FaSafari/><Link>Safari</Link></HStack>
                
                </VStack>
            
                <VStack display="flex" align="left">
                    <Text fontWeight="bold">Resources</Text>
                    <Link >Solutions</Link>
                    <Link >Integrations</Link>
                    <Link >Time Trackers Comparison</Link>
                    <Link >Blog</Link>
                </VStack>
                <VStack display="flex" align="left">
                    <Text fontWeight="bold">About</Text>
                    <Link >About TMetric</Link>
                    <Link >Terms of Service</Link>
                    <Link >Privacy Policy</Link>
                    <Link >Cookies Policy</Link>
                </VStack>

            </Stack>
        </Box>
        <HStack borderTop="1px solid gray" h='60px' bg="#ebedf0">
            <Text ml="8%">Copyright © Devart 2022</Text>
            <HStack pl="20%"  height="20px">
            <FaFacebookSquare size="30px"/>
            <FaTwitterSquare size="30px"/>
            <FaLinkedin size="30px"/>
            <FaYoutube size="30px"/>
            </HStack>
        </HStack>
    </Box>
 );   
}
export default Mainfooter;
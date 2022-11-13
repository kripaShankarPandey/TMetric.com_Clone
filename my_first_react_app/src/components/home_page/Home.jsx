import Navbar from "../navbar/Navbar";
import Topbanner from "../banner/Topbanner";
import ImageBanner from "./ImageBanner";
import {UpperFooter} from "../footer/UpperFooter"
import Mainfooter from "../footer/Mainfooter"
import { Heading,Box,Link,Text, VStack,Flex,Image, HStack} from "@chakra-ui/react";
import {FaArrowRight  } from "react-icons/fa";
import BannerStyle1 from "./BannerStyle1";
import BannerStyle2 from "./BannerStyle2";
import BannerStyle3 from "./BannerStyle3";
export default function Home(){
return (<box>
    <Navbar/>
    <Topbanner/>
    <ImageBanner/>
    <VStack h="140px" alignContent="center" mt="120px" mb="40px">
    <Heading  size="3xl">Best time tracking features for</Heading>
    <Heading  size="3xl"> your business</Heading>
    </VStack>
    <Flex h="630px" w="95%" gap="2%" m="auto"  mb="100px">
        <Box  w="65%" >
            <Image _hover={{boxShadow:"2xl",cursor:"pointer"}} src="https://tmetric.com/media/1kxfndjp/img-advantages.svg"/>
        </Box>
        <Box   w="35%">

            <VStack gap="7px">
                <Flex bg="#e7edfc" pt="5%" h="152px" w="100%" border="1px solid blue" borderRadius="10px">
                    <Box mr="2%">
                        <Image w="100px" src="https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg"/>
                    </Box>
                    <Box>
                    <Heading size="md">Time Tracking</Heading>
                    <Text>Capture every task you work on. Take control over time intervals by simple time tracking</Text>
                    <HStack color="#2e4497" display="flex">
                        <Link>Learn More </Link>
                        <FaArrowRight/>
                    </HStack>
                    </Box>
                </Flex>
                <Flex h="80px" _hover={{boxShadow:"xl",cursor:"pointer"}} border="1px solid gray" borderRadius="10px" w="100%" p="3%" color="gray.700" alignItems="center" justifyContent="flex-start">
                    <Image src="https://tmetric.com/media/1niddz51/icon-project-blue.svg" />
                    <Heading ml="2%" size="md">Project Management</Heading>
                </Flex>
                <Flex h="80px" _hover={{boxShadow:"xl",cursor:"pointer"}} border="1px solid gray" borderRadius="10px" w="100%" p="3%" color="gray.700" alignItems="center" justifyContent="flex-start">
                    <Image src="https://tmetric.com/media/2gxihhdu/icon-team-blue.svg" />
                    <Heading ml="2%" size="md">Team Management</Heading>
                </Flex>
                <Flex h="80px" _hover={{boxShadow:"xl",cursor:"pointer"}} border="1px solid gray" borderRadius="10px" w="100%" p="3%" color="gray.700" alignItems="center" justifyContent="flex-start">
                    <Image src="https://tmetric.com/media/s4koycnp/icon-invoice-blue.svg" />
                    <Heading ml="2%" size="md">Billing & Invoicing</Heading>
                </Flex>
                <Flex h="80px" _hover={{boxShadow:"xl",cursor:"pointer"}} border="1px solid gray" borderRadius="10px" w="100%" p="3%" color="gray.700" alignItems="center" justifyContent="flex-start">
                    <Image src="https://tmetric.com/media/yoblhiut/icon-reports-blue.svg" />
                    <Heading ml="2%" size="md">Reporting</Heading>
                </Flex>
                <Flex h="80px" _hover={{boxShadow:"xl",cursor:"pointer"}} border="1px solid gray" borderRadius="10px" w="100%" p="3%" color="gray.700" alignItems="center" justifyContent="flex-start">
                    <Image src="https://tmetric.com/media/cajpa4uy/icon-time-off-blue.svg" />
                    <Heading ml="2%" size="md">Time Off</Heading>
                </Flex>
              
              
            </VStack>
        </Box>
    </Flex>
    <BannerStyle1/>
    <BannerStyle3/>
    <BannerStyle2/>
    <UpperFooter/>
    <Mainfooter/>
</box>);

}
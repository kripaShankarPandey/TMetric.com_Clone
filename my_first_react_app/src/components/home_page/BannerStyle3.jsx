import { Heading,Box,UnorderedList,Button,ListItem,Flex,Image} from "@chakra-ui/react";

export default function BannerStyle3(){
    return (
        <Box mb="80px" h="570px" >
            <Flex  pt="100px" gap="4%" w="95%" m="auto">
            <Box ml="-20px" w="55%" mt="-10px">
                <Image  src="https://tmetric.com/media/lltfuaaz/img-report-cases-svg.svg" alt="image"/>
            </Box>
            <Box w="43%">
            
                <Heading size="2xl"> Achieve high  </Heading>
                <Heading size="2xl">profitability by using  </Heading>
                <Heading size="2xl">time tracker </Heading>
                <UnorderedList mt="30px" ml="7%" size="10px">
                    <ListItem> flexible time off policy</ListItem>
                    <ListItem>time off requests management</ListItem>
                    <ListItem>time off calendar</ListItem>
                    <ListItem>pto calculations</ListItem> 
                </UnorderedList>
                <Button mt="25px" w="25%" colorScheme="blue">Start Free Trail</Button>
            </Box>
        </Flex>
        </Box>
        

        );
}
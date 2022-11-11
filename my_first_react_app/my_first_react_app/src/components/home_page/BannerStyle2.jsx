import { Heading,Box,UnorderedList,Button,ListItem,Flex,Image} from "@chakra-ui/react";

export default function BannerStyle2(){
    return (
        <Box bg="#f6f7f8" h="612px" >
            <Flex  pt="100px" gap="2%" w="95%" m="auto">
            <Box ml="2%" w="43%">
                <Heading size="2xl">Improve attendance </Heading>
                <Heading size="2xl">with time off tracking </Heading>
                <Heading size="2xl">software </Heading>
                <UnorderedList mt="30px" ml="7%" size="10px">
                    <ListItem> flexible time off policy</ListItem>
                    <ListItem>time off requests management</ListItem>
                    <ListItem>time off calendar</ListItem>
                    <ListItem>pto calculations</ListItem> 
                </UnorderedList>
                <Button mt="25px" w="25%" colorScheme="blue">Start Free Trail</Button>
            </Box>

            <Box  w="55%">
                <Image  src="https://tmetric.com/media/mlzbtxv5/time-off-calendar-case.svg" alt="image"/>
            </Box>
        </Flex>
        </Box>
        

        );
}
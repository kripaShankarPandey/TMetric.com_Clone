import { Heading,Box,UnorderedList,Button,ListItem,Flex,Image} from "@chakra-ui/react";

export default function BannerStyle1(){
    return (
        <Box bg="#f6f7f8" h="612px" >
            <Flex  pt="100px" gap="2%" w="95%" m="auto">
            <Box ml="2%" w="43%">
                <Heading size="2xl">Take effective control of </Heading>
                <Heading size="2xl"> working time</Heading>
                <UnorderedList mt="30px" ml="7%" size="10px">
                    <ListItem> timekeeping</ListItem>
                    <ListItem>sites and apps monitoring</ListItem>
                    <ListItem>activity tracking</ListItem>
                    <ListItem>screenshots capturing</ListItem>
                    <ListItem>task managementt</ListItem>
                    <ListItem>50+ integrationst</ListItem>
                    <ListItem>work schedule</ListItem>
                </UnorderedList>
                <Button mt="25px" w="25%" colorScheme="blue">Start Free Trail</Button>
            </Box>

            <Box  w="55%">
                <Image  src="https://tmetric.com/media/kssowlxe/img-activity-cases.svg" alt="image"/>
            </Box>
        </Flex>
        </Box>
        

        );
}
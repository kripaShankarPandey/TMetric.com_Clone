import {Box,Heading,Button,Text} from "@chakra-ui/react"
const UpperFooter=()=>{
    return(
        <Box bg="#41338f" h="300px" display="flex" alignItems="center" justifyContent="center" flexDirection ="column" gap="9%">
            <Heading size="3xl" color="white">Make time work for you!</Heading>
            <Button size="lg" w="15%">Start Free Trail</Button>
            <Text color="white">Powered by  A software vendor with 20 years of experience.</Text>
        </Box>
    )
}
export {UpperFooter};
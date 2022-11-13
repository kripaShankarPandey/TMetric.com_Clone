import {HStack,Image} from "@chakra-ui/react"
export default function Image_banner(){
    return(

        <HStack h="170px" borderBottom="1px solid gray" justifyContent="space-evenly">
            <Image src="https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png" alt="image"/>
            <Image src="https://tmetric.com/media/w4mhgaul/time-tracking-software.png" alt="image"/>
            <Image src="https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png" alt="image"/>
            <Image src="https://tmetric.com/media/c2eewysw/g2_2022_main_page.png" alt="image"/>
            <Image src="https://tmetric.com/media/cwnfzugf/icon-capterra-shortlist.png" alt="image"/>
            <Image src="https://tmetric.com/media/psxgf3r4/icon-software-advice-frontrunners.png" alt="image"/>
            <Image w="10%"  src="https://tmetric.com/media/jfxavlps/getapp-logotype.svg" alt="image"/>
        </HStack>
    );
}
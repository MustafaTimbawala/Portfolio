
import styles from "@/app/UI/ui.module.css" 
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { Box, VStack, Button, Flex, Text, Icon } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";


export default function SocialLinks() {
    // need to apply css stuff to make it look better 
    return( 
        <Flex 
        direction={"column"} 
        justify={"center"}
        align={"center"}
   
        > 
            <Text fontSize={"2xl"} fontWeight={"bold"}>Contacts</Text>
            <VStack spacing={4}  align='center'>
                <Button 
                as='a'
                href="https://www.linkedin.com/in/mustafa-timbawala"
                target="_blank"
                colorScheme='yellow' size='md' variant={"outline"} > 
                <Icon as={CiLinkedin}/>
                    Mustafa Timbawala
                </Button>
                <Button 
                as='a'
                href="https://github.com/MustafaTimbawala"
                target="_blank"
                colorScheme='yellow' size='md' variant={"outline"}>
                    <Icon as={FaGithub}/>  
                    @MustafaTimbawala
                </Button>
                <Button 
                as='a'
                href="mailto:mm.timbawala@gmail.com"
                target="_blank"
                colorScheme='yellow' size='md'  variant={"outline"} >
                   <Icon as={CgMail}/> mm.timbawala@gmail.com
                </Button>
                <Button colorScheme='yellow' size='md'  variant={"outline"}>
                    <PhoneIcon/> 1(506)434-1831
                </Button>
            </VStack>
        </Flex>
        
    )
}
'use client' 
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text, Box, Grid, GridItem, Flex, SimpleGrid } from "@chakra-ui/react";
export default function Projects(){  

    interface Project {
        title: string;
        description: string;
        link: string;
      };
    
    const B07Project: Project  = { 
        title: "Android App", 
        description: "This is an android app developed with other team members that employed in its production the Agile methodology, and design patterns to make code that was modular, reusable and efficient. ", 
        link:"https://github.com/MustafaTimbawala/B07GR12",
      } ;  

    const B09Project: Project = { 
        title: "System Monitoring Tool",
        description: "This is a Linux System Monitoring tool that accesses Linux Systems Files to extract information about the system usage, such as CPU usage or ongoing processes, and prints the information to the terminal ",
        link: "https://github.com/MustafaTimbawala/LinuxSystemMonitoring",
    } 

    const B58Project: Project ={ 
        title: "Assembly Game", 
        description: "This is a 2D platformer game that was written using MIPS assmebly, where the character dodges enemy attacks, traps and navigates to the top to escape winning the game.",
        link:"https://github.com/MustafaTimbawala/CSCB58_FinalProject",
    }

    const Portfolio: Project ={ 
        title: "MY Portfolio Website", 
        description:" This is the code for this very portfolio so you can see the React, HTML, CSS, TypeScript, and Chakra UI that underlies this website." ,
        link:"https://github.com/MustafaTimbawala/Portfolio"
    }

    return(
        
        <Box 
        maxW={"90vw"}
        > 
            <Flex
            align='center'
            justify='center'
            > 
                <Box>   
                    <Text id="projects" fontSize='4xl' ><b>My Projects</b></Text>
                </Box>  
            </Flex>
            
        <Flex> 

        </Flex>
           
    <Flex 
    direction={"column"} 
    justify={"center"} 
    align={"center"}
    >  
        <Box 
        p={1}
        > 
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <CardFormat projectInfo={B07Project}  /> 
                <CardFormat projectInfo={B09Project}  /> 
            </SimpleGrid> 
        </Box>
        
       <Box
       p={1}
       > 
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> 
            <CardFormat projectInfo={B58Project}  />  
            <CardFormat projectInfo={Portfolio}  />
            
        </SimpleGrid>

       </Box>
  </Flex>         
       
    
        
        
      </Box>
    )
    
} 

function CardFormat({projectInfo}: any){  
    const {title, description, link} = projectInfo || {} 
    return( 
        <Card maxW='lg'>  
          <CardHeader>
           <Heading size='xs' textTransform='uppercase'> {title}</Heading>
           </CardHeader> 
          <CardBody>   
            <Text>
                {description}
            </Text>
            
          </CardBody>
          <CardFooter>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Button colorScheme="yellow" textTransform='uppercase'>Github</Button>
              </a>
              
          </CardFooter>
        </Card>  
    )

}
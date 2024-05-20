'use client' 
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text, Box, Grid, GridItem, Flex } from "@chakra-ui/react";
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
        
        <Box> 
            <Flex
            align='center'
            justify='center'
            > 
                <Box>   
                    <Text id="projects" fontSize='4xl' ><b>My Projects</b></Text>
                </Box>  
            </Flex>
            

            <Grid
            w='90vw'
            templateRows='repeat(4, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={1}
            p={5}
            > 

            <GridItem colSpan={1} rowSpan={2}> 
            <Flex
            justify='end'
            align='center'> 
                <Box> 
                    <CardFormat projectInfo={B07Project}  /> 
                </Box>
            </Flex>
                
            </GridItem>  
            <GridItem colSpan={1} rowSpan={2}> 
                <Box> 
                    <CardFormat projectInfo={B09Project}  /> 
                </Box>
            </GridItem> 
            
            
            <GridItem colSpan={1} rowSpan={2}> 
                <Flex
                justify='end'
                align='center'> 
                    <Box> 
                        <CardFormat projectInfo={B58Project}  /> 
                    </Box>
                </Flex>
            </GridItem>
            <GridItem colSpan={1} rowSpan={2}> 
                <Box> 
                    <CardFormat projectInfo={Portfolio}  />
                </Box>
            </GridItem>
            </Grid>
    
        
        
      </Box>
    )
    
} 

function CardFormat({projectInfo}: any){  
    const {title, description, link} = projectInfo || {} 
    return( 
        <Card maxW='sm'>  
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
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
        description: "This is an android app developed with other team members that employed in its production the Agile methodology, Scrum,...", 
        link:"https://github.com/MustafaTimbawala/B07GR12",
      } ; 

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
                    <CardFormat projectInfo={B07Project}  /> 
                </Box>
            </GridItem> 
            
            
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
                    <CardFormat projectInfo={B07Project}  />
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
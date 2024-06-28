//import Image from "next/image";
'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text, Box, Flex, Center, Grid, GridItem, Badge } from "@chakra-ui/react";
import styles from "./page.module.css";
import Projects from "./UI/projects";
import Simple from "./UI/newNavBar";

export default function Home() { 

  return (

    <Box maxW='100vw' w='100vw'  boxSizing="border-box" overflow={"hidden"}> 
        <Flex
        justify='center'
        align='center'
        direction='column'
        >

        <Box p='2vw' className={"start"} >
          <Text fontSize='large' className={styles.greeting}><b>Welcome.</b> I am</Text>
        </Box>
        <Box> 
          <Text fontSize='3xl' className={styles.identification}>Mustafa Timbawala.</Text>
        </Box>
          
         
          <Box p='1vw' w={"50vw"} 
          sx={{
            
            '@media screen and (max-width: 500px)': {
              width: '90vw', // Default width for screens 500px and above
            },
          }}> 
            <Text fontSize='lg'  > I am
            a passionate third-year Computer Science student specializing in Software Engineering.
             With a deep love for coding and technology, I thrive on the challenges and opportunities they present. 
             As I continue my academic journey, I am eager to grow both personally and professionally, seeking out 
             experiences that will enhance my skills as a software engineer. Welcome to my portfolio,
             where you can explore my projects, accomplishments, and aspirations.</Text>
          
        </Box>
      </Flex> 

      <Box className={styles.skills}>
        <Grid 
        templateRows='repeat(3, 1fr)'
        templateColumns='repeat(5, 1fr)'
        p={2}
        gap={1}
        maxW='90vw'
        >
          <GridItem colSpan={5} rowSpan={1} >
            <Flex
              height='100%'
              align='center'
              justify='center'
            >
              <Box> 
                <Text  fontSize='2xl'fontWeight={"bold"} color={"black"}> My Skills:</Text> 
             </Box>
            </Flex>
          
          </GridItem> 
          <GridItem colSpan={1} rowSpan={1}><Badge colorScheme="orange">C</Badge></GridItem>
          <GridItem colSpan={1} rowSpan={1}><Badge colorScheme="orange">Python</Badge></GridItem>
          <GridItem colSpan={1} rowSpan={1}><Badge colorScheme="orange">Java</Badge></GridItem>
          <GridItem colSpan={1} rowSpan={1}><Badge colorScheme="orange">JavaScript</Badge></GridItem> 
          <GridItem colSpan={1} rowSpan={1}><Badge colorScheme="orange">SQL</Badge></GridItem>
          <GridItem colSpan={1} rowSpan={1}><Badge colorScheme="orange">React</Badge></GridItem>
          <GridItem colSpan={1} rowSpan={1}><Badge colorScheme="orange">HTML</Badge></GridItem>
          <GridItem colSpan={1} rowSpan={1}><Badge colorScheme="orange">CSS</Badge></GridItem>
          <GridItem colSpan={1} rowSpan={1}><Badge colorScheme="orange">Github</Badge></GridItem>
        </Grid>
        
      </Box> 
      
      <Flex
      align='center'
      justify='center'
      >
        <Box  id="resume" p='3vw'> 
          <a href="/assets/MasterResume.pdf" download><Button colorScheme="yellow">Download My Resume</Button></a>
        </Box>
      </Flex>

      <Flex
      direction={"row"} 
      align='center'
      justify='center'
      > 
          <Projects/>
      </Flex>

    </Box>
 
    
  );
}

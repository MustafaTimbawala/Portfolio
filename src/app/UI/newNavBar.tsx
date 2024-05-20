import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

interface Links { 
    id:any, 
    title:string,
    link:any,
}



const NavLink = ({ children }: any) => ( 
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={children.link}>
    {children.title}
  </Link>
); 



export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const home : Links = { 
    id : 1,
    title: "HOME", 
    link: "#start",
  }  
  const resume : Links = { 
    id : 2,
    title: "RESUME", 
    link: "#resume",
  } 
  const projects : Links = { 
    id : 3,
    title: "PROJECTS", 
    link: "#projects",
  } 

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <NavLink>{home}</NavLink> 
              <NavLink>{resume}</NavLink> 
              <NavLink>{projects}</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    '/favicon.ico'  
                  }
                />
              </MenuButton>
              <MenuList>
              <a href="https://www.linkedin.com/in/mustafa-timbawala" target="_blank" rel="noopener noreferrer"><MenuItem>LinkedIn</MenuItem></a>
                <MenuDivider />
                <a href="https://github.com/MustafaTimbawala" target="_blank" rel="noopener noreferrer"><MenuItem>Github</MenuItem></a>
                <MenuDivider /> 
                <a href="mailto:mm.timbawala@gmail.com" target="_blank" rel="noopener noreferrer"><MenuItem>Email</MenuItem></a>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
                <NavLink>{home}</NavLink> 
                <NavLink>{resume}</NavLink> 
                <NavLink>{projects}</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
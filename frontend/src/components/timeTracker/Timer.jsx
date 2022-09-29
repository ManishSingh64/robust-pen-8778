import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { BsTag } from 'react-icons/bs';
import { Box, Button, Flex, Input, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

export const Timer = () => {
  const [trackerData, setTrackerData] = useState({});

  const handleChange = () => {};
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} style={{padding: '20px'}}>
      <Flex  border='1px solid #ccc' justify='space-between' align='center'>
      <Input type='text' placeholder='What are you working on?' />
      
      <Menu>
      <MenuButton>
        <IoIosAddCircleOutline size='30'/>Project
      </MenuButton>
      <MenuList>
        <MenuItem>Notifications</MenuItem>
        <MenuItem>No new notifications</MenuItem>        
      </MenuList>
    </Menu> 

    <Menu>
      <MenuButton>
        <BsTag size='30'/>Project
      </MenuButton>
      <MenuList>
        <MenuItem>Notifications</MenuItem>
        <MenuItem>No new notifications</MenuItem>        
      </MenuList>
    </Menu> 
    <Input type='text' placeholder='0:00:00' />
    <Button type='submit'>START</Button>
    </Flex>
    </form>
  )
}



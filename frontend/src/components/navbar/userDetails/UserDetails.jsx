import React from "react";
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Switch } from "@chakra-ui/react";

export const UserDetails = () => { //GiHamburgerMenu
  return (
    <Menu>
      <MenuButton as={Button} size='sm' variant='ghost'>
        image
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Box>naram data</Box>
          <Box>naramdata@gmial.com</Box>
        </MenuItem><hr />
        <MenuItem>naram data's workspace</MenuItem> <hr />
        <MenuItem>
          <Flex><Box>Dark theme</Box> <Switch/> </Flex>
        </MenuItem>
        <MenuItem>Download apps</MenuItem>
        <MenuItem>Try chat app</MenuItem>
        <MenuItem>Help</MenuItem><hr />
        <MenuItem>Log out</MenuItem>
      </MenuList>
    </Menu>
  );
};


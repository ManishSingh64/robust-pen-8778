import React from "react";
import { IoIosNotificationsOutline } from 'react-icons/io';
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export const Notification = () => {
  return (
    <Menu>
      <MenuButton>
        <IoIosNotificationsOutline size='30'/>
      </MenuButton>
      <MenuList>
        <MenuItem>Notifications</MenuItem>
        <MenuItem>No new notifications</MenuItem>        
      </MenuList>
    </Menu>
  );
};


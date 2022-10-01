import React from "react";

import { Notification } from "./notifications/Notification";

import { Button, Flex } from "@chakra-ui/react";
import { UserDetails } from "./userDetails/UserDetails";

export const Navbar = () => {
  return (
    <>
      <Flex gap='5'>
        <Button variant='outline' borderColor='blue' color='blue' size='sm'>UPGRADE</Button>
        <Notification/>
        <UserDetails/>
      </Flex>
    </>
  );
};

import React from "react";
import empty_box from "../../assets/ui-icons/empty-tracker-icon.webp";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import {
  AiFillAndroid,
  AiFillApple,
  AiFillChrome,
  AiFillWindows,
} from "react-icons/ai";

export const EmptyBox = () => {
  return (
    <Flex
      flexDir="column"
      gap="3"
      fontSize="lg"
      justify="center"
      align="center"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      w={["40%", "40%", "23%"]}
      borderRadius="5"
      m="auto"
    >
      <Image src={empty_box} alt="empty-box-image" />
      <Text fontWeight="bold">Let's start tracking!</Text>
      <Text color="#797979">Install Clockify and Track time anywhere.</Text>
      <Flex color="#797979">
        <Box>
          <AiFillAndroid />
        </Box>
        <Box>
          <AiFillApple />
        </Box>
        <Box>
          <AiFillChrome />
        </Box>
        <Box>
          <AiFillWindows />
        </Box>
      </Flex>
      <Text color="#797979">50+ integrations</Text>
    </Flex>
  );
};



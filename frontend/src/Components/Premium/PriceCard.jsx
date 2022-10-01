import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const PriceCard = () => {
  return (
    <Box w="100%" display={'flex'}>
      <Box>
        <Text fontSize={"3xl"}>Basic</Text>
        <Text fontSize={"4xs"}>Administration</Text>
        <Text display={"flex"} justifyContent="center" my="2">
          ${" "}
          <Text mx={[0, 0, 0, 0.5]} fontSize={"2xl"}>
            4
          </Text>
          .99
        </Text>
        <Text fontSize={"sm"} color="gray">
          per seat
        </Text>
        <Button
          my="2"
          color={"white"}
          bgColor="#3d4853"
          _hover={{ color: "white", bgColor: "#3d4853" }}
          borderRadius="none"
        >
          UPGRADE
        </Button>
        <Box>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
        </Box>
      </Box>
      <Box>
        <Text fontSize={"3xl"}>Basic</Text>
        <Text fontSize={"4xs"}>Administration</Text>
        <Text display={"flex"} justifyContent="center" my="2">
          ${" "}
          <Text mx={[0, 0, 0, 0.5]} fontSize={"2xl"}>
            4
          </Text>
          .99
        </Text>
        <Text fontSize={"sm"} color="gray">
          per seat
        </Text>
        <Button
          my="2"
          color={"white"}
          bgColor="#3d4853"
          _hover={{ color: "white", bgColor: "#3d4853" }}
          borderRadius="none"
        >
          UPGRADE
        </Button>
        <Box>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
        </Box>
      </Box>
      <Box>
        <Text fontSize={"3xl"}>Basic</Text>
        <Text fontSize={"4xs"}>Administration</Text>
        <Text display={"flex"} justifyContent="center" my="2">
          ${" "}
          <Text mx={[0, 0, 0, 0.5]} fontSize={"2xl"}>
            4
          </Text>
          .99
        </Text>
        <Text fontSize={"sm"} color="gray">
          per seat
        </Text>
        <Button
          my="2"
          color={"white"}
          bgColor="#3d4853"
          _hover={{ color: "white", bgColor: "#3d4853" }}
          borderRadius="none"
        >
          UPGRADE
        </Button>
        <Box>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
          <Text fontSize={"14px"} lineHeight="28px" align={"left"}>
            Add time for others
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceCard;

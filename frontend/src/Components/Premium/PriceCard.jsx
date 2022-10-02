import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import {  useNavigate } from "react-router-dom";

const PriceCard = ({id, planeName, role, price, buttonColor, data }) => {
  console.log(id);
  const navigate = useNavigate();

  return (
    <Box w="100%">
      <Box
        borderTop={`3px solid ${buttonColor}`}
        borderBottom={"1px solid grey"}
        borderRight={"1px solid grey"}
        borderLeft={"1px solid grey"}
        w="250px"
      >
        <Text fontSize={"3xl"} my="6">
          {planeName}
        </Text>
        <Text fontSize={"4xs"}>{role}</Text>
        <Text display={"flex"} justifyContent="center" my="2">
          ${" "}
          <Text mx={[0, 0, 0, 0.5]} fontSize={"2xl"}>
            {price}
          </Text>
          .99
        </Text>
        <Text fontSize={"sm"} color="gray">
          per seat
        </Text>
        <Button
          my="2"
          color={"white"}
          bgColor={buttonColor}
          _hover={{ color: "white", bgColor: buttonColor }}
          borderRadius="none"
          width={"90%"}
          onClick={() => {
            navigate(`/checkout/${id}`);
          }}
        >
          UPGRADE
        </Button>
        <Box p={"6"}>
          {data.map((el, i) => {
            return (
              <Text key={i} fontSize={"14px"} lineHeight="28px" align={"left"}>
                {el.title}
              </Text>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default PriceCard;

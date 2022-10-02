import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = ({ data, direction }) => {
  return (
    <Marquee scrollAmount="20" direction={direction}>
      {data.map((elem) => (
        <Flex
          w="240px"
          h="160px"
          p="15px"
          m={2}
          key={elem.id}
          boxShadow="0 2px 6px 0 rgb(1 87 155 / 20%)"
          alignItems="flex-start"
          flexDir="column"
          transition="1s"
          _hover={{
            transform: "scale(1.1)",
            zIndex: "2",
            background: "white",
            cursor: "pointer",
          }}
        >
          <Heading size="xs">{elem.title}</Heading>
          <Text color="#ffbf00"> ★★★★★ </Text>
          <Text fontSize="xs">{elem.feedback}</Text>
          <Text fontSize="xs">{elem.client}</Text>
        </Flex>
      ))}
    </Marquee>
  );
};

export default Testimonials;

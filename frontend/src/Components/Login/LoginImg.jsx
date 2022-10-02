import { Image, Button, Box, Stack, Text, Heading } from "@chakra-ui/react";

const LoginImg = () => {
  return (
    <Stack
      bg={"#43a9cf"}
      py={6}
      px={2}
      color={"white"}
      w={["340px", "480px"]}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Button bg={"#E4EAEE"} fontSize="sm" h={10} p={5} color={"black"}>
        New
      </Button>
      <Heading>Scheduling</Heading>
      <Text fontSize={"lg"} textAlign={"center"} maxW={"md"}>
        Visualize projects on a timeline and plan team's capacity (see who's
        busy and who's available).
      </Text>
      <Button bg={"black"} color={"white"}>
        SEE HOW IT WORKS
      </Button>
      <Image
        position={"relative"}
        left="20px"
        h="524px"
        src="https://app.clockify.me/assets/features-info/scheduling-promo.webp"
      />
    </Stack>
  );
};

export default LoginImg;

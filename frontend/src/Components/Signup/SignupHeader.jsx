import { Link } from "react-router-dom";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const SignupHeader = () => {
  return (
    <>
      <Box w="960px" p={7} m={"auto"} mt="1rem">
        <Flex h={16} justifyContent={"space-between"}>
          <Box>
            <Link to="/">
              <img src="https://app.clockify.me/assets/logo.svg" alt="" />
            </Link>
          </Box>
          <Box>
            <span style={{ fontSize: "14px", color: "#999" }}>
              Already have an account?{" "}
            </span>
            <Link to="/login">
              <span style={{ color: "#03A9F4", fontSize: "14px" }}>Log in</span>
            </Link>
          </Box>
        </Flex>
      </Box>
      <Heading fontWeight={"normal"}>Get started with Clockify</Heading>
      <Text color={"#9a9a9b"} fontWeight={"semibold"} fontSize={"16px"} m={5}>
        Create a free account to start tracking time and supercharge your
        productivity.
      </Text>
      <Text color={"#9a9a9b"} fontSize={"12px"} mb={5}>
        No credit card required * Unsubscribe at any time
      </Text>
    </>
  );
};
export default SignupHeader;

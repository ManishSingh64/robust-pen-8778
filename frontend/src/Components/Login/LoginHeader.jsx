import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const LoginHeader = () => {
  return (
    <>
      <Box w="960px" p={7} mt="1rem">
        <Flex h={16} justifyContent={"space-between"}>
          <Box>
            <Link to="/">
              <img src="https://app.clockify.me/assets/logo.svg" alt="" />
            </Link>
          </Box>
          <Box>
            <span style={{ fontSize: "14px", color: "#999" }}>
              Don't have an account?{" "}
            </span>
            <Link to="/signup">
              <span style={{ color: "#03A9F4", fontSize: "14px" }}>
                Sign up
              </span>
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default LoginHeader;

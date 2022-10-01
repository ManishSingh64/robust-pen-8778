import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
// import { LoginGet } from "../../Stores/Auth/auth.actions";
// import GoogleButton from "./Googlebutton";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const LoginForm = () => {
  const { token } = useSelector((state) => state.authReducer);
  const { isAuth } = useSelector((state) => state.authReducer);
  console.log(isAuth ? "Yes" : "No");
  // console.log();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const comingFrom = location.state?.from?.pathname || "/";
  console.log(comingFrom);
  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     dispatch(LoginGet(email, password));
  //   };
  //   if (isAuth) {
  //     navigate(comingFrom, { replace: true });
  //   }
  return (
    <Flex minH={"1vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={4} px={2}>
        <Box
          rounded={"lg"}
          boxShadow={"lg"}
          bg={useColorModeValue("white")}
          p={8}
        >
          <Stack bg={useColorModeValue("white")} spacing={4}>
            <FormControl bg={useColorModeValue("white")} id="email">
              <FormLabel bg={useColorModeValue("white")}>Log In</FormLabel>
              <Input
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </FormControl>
            <FormControl bg={useColorModeValue("white")} id="password">
              {/* <FormLabel>Password</FormLabel> */}
              <Input
                bg={useColorModeValue("white")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                type="password"
              />
            </FormControl>
            <Stack bg={useColorModeValue("white")} spacing={10}>
              <Stack
                bg={useColorModeValue("white")}
                direction={{ base: "column", sm: "row" }}
                align={"start"}
              >
                <Checkbox bg={useColorModeValue("white")}>
                  Stay logged in
                </Checkbox>
                <Link color={"#03A9F4"}>Forgot Password?</Link>
              </Stack>
              <Button
                // onClick={(e) => handleClick(e)}
                bg={"blue.300"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Log In
              </Button>
              {/* <GoogleButton /> */}
            </Stack>
          </Stack>
        </Box>
        <Stack direction="row" pl="6.5rem">
          <img
            src="https://app.clockify.me/assets/ui-icons/translate.svg"
            alt=""
          />
          <Text>English</Text>
        </Stack>
        <Stack direction="row">
          <img src="https://app.clockify.me/assets/ui-icons/safe.svg" alt="" />
          <Text>Your data is safe with us:</Text>
          <Text color={"#03A9F4"}>Security Privacy</Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default LoginForm;

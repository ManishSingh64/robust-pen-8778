import { Box, Link, Button, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { FcGoogle } from "react-icons/fc";

const SignupForm = () => {
  const [form, setForm] = useState({});
  const ref = useRef();
  const passref = useRef();
  const onChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const toast = useToast();
  function ToastExample() {
    return (
      <Button
        w="280px"
        color={"white"}
        fontSize="14px"
        mt={4}
        backgroundColor={"#03A9F4"}
        type="submit"
        onClick={handleSignup}
      >
        CREATE FREE ACCOUNT
      </Button>
    );
  }

  const handleSignup = () => {
    form.email &&
      axios
        .post("https://clockify-api.herokuapp.com/signup", form)
        .then((res) => {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          console.log(res.data);
        })
        .catch((err) => {
          toast({
            title: "Email id Already exist",
            description: "Please Login",
            status: "warning",
            duration: 9000,
            isClosable: true,
          });
          console.log(err);
        });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!form.email) {
      toast({
        title: "Please enter email id",
        description: "email is mandatory",
        status: "warning",
        duration: 6000,
        isClosable: true,
      });
      ref.current.focus();
    } else if (!form.password) {
      toast({
        title: "please enter password",
        description: "password cannot be null",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      passref.current.focus();
    }
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        style={{
          width: "350px",
          padding: "15px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: "auto",
          backgroundColor: "white",
        }}
      >
        <div>
          <Text
            ml={4}
            pb={5}
            fontSize="18px"
            fontWeight="semibold"
            textAlign={"left"}
            mt={5}
          >
            Sign up
          </Text>
          <input
            style={{
              width: "280px",
              padding: "6px",
              marginBottom: "15px",
              borderRadius: "0px",
              border: "1px solid #c6d2d9",
            }}
            type="text"
            ref={ref}
            placeholder="Enter email"
            name="email"
            onChange={onChange}
          />
        </div>
        <div>
          <input
            style={{
              width: "280px",
              padding: "5px",
              borderRadius: "0px",
              border: "1px solid #c6d2d9",
              marginBottom: "10px",
            }}
            ref={passref}
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={onChange}
          />
        </div>

        <div
          style={{
            display: "flex",
            width: "280px",
            margin: "auto",
          }}
        >
          <input type="checkbox" name="terms" onChange={onChange} />
          <label style={{ fontSize: "14px", color: "#333", marginLeft: "8px" }}>
            I agree to the {"  "}
          </label>
          <Link fontSize={"14px"} ml={1} color={"#03A9F4"}>
            Terms of use
          </Link>
        </div>
        <ToastExample />
        <Box fontSize={"14px"} m={3}>
          OR
        </Box>
        <Button mb={5} variant={"outline"} w={"280px"}>
          <FcGoogle style={{ position: "relative", left: "-30px" }} />
          <Text fontSize={"14px"}> Continue with Google</Text>
        </Button>
      </form>
    </>
  );
};

export default SignupForm;

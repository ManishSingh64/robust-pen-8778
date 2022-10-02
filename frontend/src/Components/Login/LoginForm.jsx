import { Box, Link, Button, Text, useToast } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import styles from "./login.module.css";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
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

  const navigate = useNavigate();

  const toast = useToast();
  function ToastExample() {
    return (
      <Button
        w="240px"
        color={"white"}
        fontSize="14px"
        mt={4}
        backgroundColor={"#03A9F4"}
        type="submit"
        onClick={handleLogin}
      >
        LOG IN
      </Button>
    );
  }

  const handleLogin = () => {
    form.email &&
      axios
        .post("https://clockify-api.herokuapp.com/login", form)
        .then((res) => {
          toast({
            title: "Login Successfull.",
            description: "You have successfully logged in.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          localStorage.setItem("token", JSON.stringify(res.data.token));
          navigate("/tracker");
          console.log(res.data);
        })
        .catch((err) => {
          toast({
            title: "Please signup first",
            description: "User not exist",
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
      ref.current.className += styles.redBorder;
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
          width: "300px",
          padding: "15px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: "auto",
          marginTop: "80px",
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
            Log In
          </Text>
          <input
            style={{
              width: "240px",
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
              width: "240px",
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
            justifyContent: "space-between",
            width: "240px",
            margin: "auto",
          }}
        >
          <input type="checkbox" name="isIndian" onChange={onChange} />
          <label
            style={{ fontSize: "14px", color: "#333", marginLeft: "-15px" }}
          >
            Stay logged in{"   "}
          </label>
          <Link fontSize={"14px"} color={"#03A9F4"}>
            Forget password?
          </Link>
        </div>
        <ToastExample />
        <Box fontSize={"14px"} m={3}>
          OR
        </Box>
        <Button variant={"outline"} w={"240px"}>
          <FcGoogle style={{ position: "relative", left: "-30px" }} />
          <Text fontSize={"14px"}> Continue with Google</Text>
        </Button>
      </form>
    </>
  );
};

export default LoginForm;

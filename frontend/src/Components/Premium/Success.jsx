import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
  } from "@chakra-ui/react";
  import React from "react";
  import { useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  
  
  
  function SuccessMsg() {
    
    let navigate = useNavigate();
    useEffect(() => {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }, []);
  
    return (
      <Box display={"flex"} justifyContent={"center"} height={"80vh"}>
        <Box width={"400px"} height={"40vh"} my="12">
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Payment Done
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Now you are Prime User
            </AlertDescription>
          </Alert>
        </Box>
      </Box>
    );
  }
  
  export default SuccessMsg;
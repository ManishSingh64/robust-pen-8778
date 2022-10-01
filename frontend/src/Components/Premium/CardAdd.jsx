import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CardAdd = () => {
    let navigate = useNavigate();
    const handleSubmit = ()=>{
        return navigate('/success') ;
    }
  return (
    <Box border={"1px solid grey"} w={["100%", "100%", "50%", "70%"]} p="5">
      <Tabs>
        <TabList>
          <Tab display={"flex"} flexDir="column" justifyContent={"flex-start"}>
            <Text fontSize="18px">STEP 1</Text>
            <Text fontSize={"12px"}>Invoice information</Text>
          </Tab>

          <Tab display={"flex"} flexDir="column" justifyContent={"flex-start"}>
            <Text fontSize="18px">STEP 2</Text>
            <Text fontSize={"12px"}>Payment information</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel justifyContent={"flex-start"}>
            <Text textAlign={"left"} fontSize={"2xl"} my="4">
              Invoice information
            </Text>
            <Flex flexDir={"column"} w="60%">
              <FormControl my="2">
                <FormLabel fontWeight={400}>Company name</FormLabel>
                <Input type={"text"} w="100%" borderRadius={"none"} />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={400}>Send emails to</FormLabel>
                <Input type={"text"} w="100%" borderRadius={"none"} />
              </FormControl>
            </Flex>
            <Box m="1rem">
              <hr />
            </Box>
            <Box w="60%">
              <Button
                w="90%"
                bgColor={"#03A9F4"}
                color="white"
                borderRadius={"none"}
                _hover={{
                  color: "white",
                  bgColor: "#03A9F4",
                }}
              >
                NEXT STEP
              </Button>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box>
              <Text fontSize={"2xl"} my="2" textAlign={"left"}>
                Payment information
              </Text>
            </Box>
            <Box w="60%">
              <FormControl isRequired>
                <FormLabel>Card Number</FormLabel>
                <InputGroup>
                  <InputLeftAddon
                    pointerEvents={"none"}
                    children={<FaCreditCard />}
                  />
                  <Input type="number" placeholder="1234 4566 7899 9999" />
                </InputGroup>
              </FormControl>
              <Flex justifyContent={"space-between"} gap="1rem" my="4">
                <FormControl isRequired>
                  <FormLabel>Expiration date</FormLabel>
                  <Input
                    type="number"
                    variant={"flushed"}
                    placeholder="MM/YY"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>CVC (required)</FormLabel>
                  <Input type="number" variant={"flushed"} placeholder="CVV" />
                </FormControl>
              </Flex>
              <VStack>
                <FormControl isRequired>
                  <FormLabel>Cardholder Name</FormLabel>
                  <Input type="text" borderRadius={"none"} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Street </FormLabel>
                  <Input type="text" borderRadius={"none"} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>City</FormLabel>
                  <Input type="text" borderRadius={"none"} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Zip / Postal Code</FormLabel>
                  <Input type="text" borderRadius={"none"} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>State</FormLabel>
                  <Input type="text" borderRadius={"none"} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Country</FormLabel>
                  <Input type="text" borderRadius={"none"} />
                </FormControl>
                <FormControl>
                  <Checkbox isInvalid>
                    {" "}
                    I have read and agree to the Terms of Use
                  </Checkbox>
                </FormControl>
                <Button
                  w="90%"
                  bgColor={"#03A9F4"}
                  color="white"
                  borderRadius={"none"}
                  _hover={{
                    color: "white",
                    bgColor: "#03A9F4",
                  }}
                  onClick={() => handleSubmit()}
                >
                  FINISH PAYMENT
                </Button>
              </VStack>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default CardAdd;

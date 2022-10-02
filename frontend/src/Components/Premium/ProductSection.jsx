import {
  Badge,
  Box,
  Flex,
  FormControl,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { monthly } from "./PriceData";

const ProductSection = () => {
  let [loading, setLoading] = useState(true);
  let [count, setCount] = useState(1);
  let [gdata, setgData] = useState({});
  let { id } = useParams();
  let { planeName, price, List } = gdata;
  const getData = () => {
    monthly.map((el) => {
      if (Number(id) === el.id) {
        setgData(el);
        setLoading(false)
        
      }
    });
  };
  useEffect(() => {
    setLoading(true)
    getData();
    
  }, []);
  console.log(gdata);

  return (
    <Box border={"1px solid grey"} p="1rem">
      <Tabs>
        <TabList>
          <Tab _selected={{ color: "white", bg: "grey" }} fontSize="14px">
            Monthly Billing
          </Tab>
          <Tab _selected={{ color: "white", bg: "grey" }} fontSize="14px">
            Annual Billing{" "}
            <Badge m={[0, 0, 0, 2]} colorScheme={"whatsapp"}>
              SAVE 20%
            </Badge>
          </Tab>
        </TabList>
        <Text m={[5, 0, 0, 3]}>
          {planeName}    workspace
        </Text>
        <Box p="1rem" border={"1px solid grey"}>
          <FormControl>
            <Flex
              alignItems={"center"}
              justifyContent="space-between"
              gap="1rem"
              color={"#333333"}
              fontSize="14px"
            >
              <Text>User seats</Text>
              <NumberInput
                value={count}
                // onChange={handleChange}
                max={10}
                min={1}
                w="100px"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper
                    onClick={(e) => setCount((count) => count + 1)}
                  />
                  <NumberDecrementStepper
                    onClick={(e) => setCount((count) => count - 1)}
                  />
                </NumberInputStepper>
              </NumberInput>
              <Text>x ${price}</Text>
              <Text>${count * price}</Text>
            </Flex>
            <Box m="10px">
              <hr />
            </Box>
            <Flex justifyContent={"space-between"}>
              <Text>Total Price</Text>
              <Text>${count * price}</Text>
            </Flex>
          </FormControl>
        </Box>
        <Box m="10" textAlign={"left"}>
          {loading === false && List.map((el, i) => {
            return (
              <Text key={i} fontSize={"14px"} lineHeight="28px" align={"left"}>
                {el.title}
              </Text>
            );
          })}
        </Box>
      </Tabs>
    </Box>
  );
};

export default ProductSection;

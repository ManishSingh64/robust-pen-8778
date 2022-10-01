import {
  Badge,
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import PriceCard from "./PriceCard";
import { monthly,annual } from "./PriceData";

const Pricing = () => {
  
  return (
    <VStack>
      <Text fontSize={"3xl"}>Get more features</Text>
      <Text>Upgrade your workspace to use advanced features.</Text>
      <Tabs variant={"enclosed"}>
        <Flex justifyContent={'center'} direction='row' >
        <TabList>
          <Tab _selected={{ color: "white", bg: "grey" }} px="10">
            Monthly Billing
          </Tab>
          <Tab _selected={{ color: "white", bg: "grey" }}>
            Annual Billing{" "}
            <Badge m={[0, 0, 0, 2]} colorScheme={"whatsapp"}>
              SAVE 20%
            </Badge>
          </Tab>
        </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Box display={"flex"}  boxSizing='border-box'>
              {monthly.map((el,i) => {
                return (
                  <PriceCard
                  key={i}
                    planeName={el.planeName}
                    role={el.role}
                    price={el.price}
                    buttonColor={el.buttonColor}
                    data={el.List}
                  />
                );
              })}
            </Box>
          </TabPanel>
          <TabPanel><Box display={"flex"} boxSizing='border-box'>
              {annual.map((el,i) => {
                return (
                  <PriceCard
                  key={i}
                    planeName={el.planeName}
                    role={el.role}
                    price={el.price}
                    buttonColor={el.buttonColor}
                    data={el.List}
                  />
                );
              })}
            </Box></TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default Pricing;

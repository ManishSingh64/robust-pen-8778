import {
  Badge,
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

const Pricing = () => {
  return (
    <VStack>
      <Text fontSize={"3xl"}>Get more features</Text>
      <Text>Upgrade your workspace to use advanced features.</Text>
      <Tabs variant={'enclosed'}>
        <TabList>
          <Tab _selected={{ color: "white", bg: "grey" }} px='10' >Monthly Billing</Tab>
          <Tab _selected={{ color: "white", bg: "grey" }}>
            Annual Billing{" "}
            <Badge m={[0, 0, 0, 2]} colorScheme={"whatsapp"}>
              SAVE 20%
            </Badge>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel><PriceCard/></TabPanel>
          <TabPanel>two</TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default Pricing;

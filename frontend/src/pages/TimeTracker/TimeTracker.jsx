import React from "react";
// import SideBar from "../../Components/Sidebar/SideBar";
import { Timer } from "../../Components/timeTracker/Timer";
// import React from "react";
// import SideBar from "../../components/Sidebar/SideBar";
// import { Timer } from "../../components/timeTracker/Timer";
import React, { useState } from "react";
import plusBlue from "../../assets/ui-icons/plus-blue-req.svg";
import list from "../../assets/ui-icons/list-blue.svg";
import timerClock from "../../assets/ui-icons/clock-blue.svg";

import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  // Text,
} from "@chakra-ui/react";
// import { IoIosAddCircleOutline } from "react-icons/io";
import { BsTag } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { EmptyBox } from "../../components/timetracker/EmptyBox";
// import TrackerShower from "../../components/timetracker/TrackerShower";

export const TimeTracker = () => {
  const [toggleTimer, setToggleTimer] = useState(false);
  const [datepicker, setDatepicker] = useState(new Date());
  const [trackerData, setTrackerData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrackerData({
      ...trackerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(trackerData);
  };

  return (
    // =======
    <>
      <div>
        {/* <SideBar /> */}
        <Timer />
      </div>
      <Box>
        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
          <Flex
            border="1px solid #ccc"
            borderRadius="5"
            justify="space-between"
            align="center"
            gap="8"
            p="2px 5px"
          >
            <Flex w="60%" gap="5" justify="space-between" align="center">
              <Input
                type="text"
                border="none"
                name="trackername"
                onChange={handleChange}
                placeholder="What are you working on?"
              />

              <Menu>
                <MenuButton>
                  <Flex color="blue">
                    <Box>
                      <Image w="35px" src={plusBlue} alt="plus" />
                    </Box>
                    <Box>Project</Box>
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem>Notifications</MenuItem>
                  <MenuItem>No new notifications</MenuItem>
                </MenuList>
              </Menu>
            </Flex>

            <Menu>
              <MenuButton>
                <BsTag size="30" />
              </MenuButton>
              <MenuList>
                <MenuItem>Notifications</MenuItem>
                <MenuItem>No new notifications</MenuItem>
              </MenuList>
            </Menu>

            <Flex display={toggleTimer ? "flex" : "none"}>
              <Flex align="center" gap="2">
                <Box>
                  <Input
                    name="trackertime1"
                    onChange={handleChange}
                    type="text"
                    placeholder="23:16"
                  />
                </Box>
                <Box>-</Box>
                <Box>
                  <Input
                    name="trackertime2"
                    onChange={handleChange}
                    type="text"
                    placeholder="23:16"
                  />
                </Box>
              </Flex>
              <DatePicker
                selected={datepicker}
                style={{ width: "2px" }}
                onChange={(date) => setDatepicker(date)}
              />
            </Flex>
            <Input
              w="20%"
              name="trackertime3"
              onChange={handleChange}
              type="text"
              placeholder="0:00:00"
            />
            <Button bgColor="#03a9f4" color="#fff" type="submit">
              ADD
            </Button>

            <Box>
              <Button
                size="xs"
                variant="transparent"
                onClick={() => setToggleTimer(false)}
              >
                <Image src={timerClock} alt="clock" />
              </Button>
              <Button
                size="xs"
                variant="transparent"
                onClick={() => setToggleTimer(true)}
              >
                <Image src={list} alt="clock" />
              </Button>
            </Box>
          </Flex>
        </form>

        <Box>
          <Box w="97%" minH="80vh" m="auto" display="grid" position="center">
            <EmptyBox />
          </Box>
          {/* <TrackerShower/> */}
        </Box>
      </Box>
    </>
    // >>>>>>> master
  );
};

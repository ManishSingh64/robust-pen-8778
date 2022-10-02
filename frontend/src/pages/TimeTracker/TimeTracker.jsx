import React, { useEffect, useState } from "react";
import list from "../../assets/ui-icons/list-blue.svg";
import timerClock from "../../assets/ui-icons/clock-blue.svg";
import styles from "./timer.module.css";

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
  useMediaQuery,
} from "@chakra-ui/react";

import { TbCurrencyDollar } from "react-icons/tb";
import { EmptyBox } from "../../components/timeTracker/EmptyBox";
import { TrackerShower } from "../../components/timeTracker/TrackerShower";
import { useDispatch, useSelector } from "react-redux";
import {
  getTrackerAPI,
  postTrackerAPI,
} from "../../store/TimeTracker/timeTracker.action";

import { useState } from "react";
import list from "../../assets/ui-icons/list-blue.svg";
import timerClock from "../../assets/ui-icons/clock-blue.svg";
// import plusBlue from "../../assets/ui-icons/plus-blue-req.svg";
// import { BsTag } from "react-icons/bs";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EmptyBox from "../../components/timeTracker/EmptyBox";


export const TimeTracker = () => {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [toggleTimer, setToggleTimer] = useState(false);
  const [bilable, setBilable] = useState(false);
  const [trackerData, setTrackerData] = useState({});

  const dispatch = useDispatch();
  const { loading, error, timeTrackerData } = useSelector(
    (state) => state.tracker
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrackerData({
      ...trackerData,
      [name]: value,
      trackerBillable: bilable,
    });
    console.log(trackerData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(trackerData).length > 0) {
      dispatch(postTrackerAPI(trackerData));
    }
  };

  useEffect(() => {
    dispatch(getTrackerAPI());
  }, []);

  return (
    <>
      <div>
        {/* <SideBar /> */}
        {/* <Timer /> */}
      </div>
      <Box>
        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
          <Flex
<<<<<<< HEAD
            maxW={"100vw"}
            flexDir={isLargerThan1000 ? "row" : "column"}
=======
>>>>>>> master
            border="1px solid #ccc"
            borderRadius="5"
            justify="space-between"
            align="center"
<<<<<<< HEAD
            gap={isLargerThan1000 ? "8" : "0"}
            p={isLargerThan1000 ? "5px 5px" : "0"}
          >
            <Flex
              w={isLargerThan1000 ? "40%" : "100%"}
              p={isLargerThan1000 ? "0" : "5"}
              gap="5"
              justify="space-between"
              align="center"
            >
              <Input
                w="50%"
                type="text"
                border="none"
                name="trackerName"
=======
            gap="8"
            p="2px 5px"
          >
            <Flex w="60%" gap="5" justify="space-between" align="center">
              <Input
                type="text"
                border="none"
                name="trackername"
>>>>>>> master
                onChange={handleChange}
                placeholder="What are you working on?"
              />

<<<<<<< HEAD
              <Input
                w="50%"
                type="text"
                border="none"
                name="trackerProject"
                onChange={handleChange}
                placeholder="Project Name"
              />
            </Flex>

            <Flex
              w={isLargerThan1000 ? "60%" : "100%"}
              borderTop={isLargerThan1000 ? "" : "1px solid #ccc"}
              p={isLargerThan1000 ? "0" : "2"}
              gap="5"
              justify="space-between"
              align="center"
            >
              <Input
                w="40%"
                type="text"
                border="none"
                name="trackerTag"
                onChange={handleChange}
                placeholder="Tag"
              />

              <Button
                variant="transtarent"
                color={bilable ? "#03a9f4" : ""}
                onClick={() => setBilable(!bilable)}
              >
                <TbCurrencyDollar fontSize="50" />
              </Button>

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
                <Input name="trackerDate" onChange={handleChange} type="date" />
              </Flex>

              <Input
                w="20%"
                name="stopAt"
                onChange={handleChange}
                type="text"
                placeholder="0:00:00"
              />

              <Button
                variant="#03a9f4"
                bgColor="#03a9f4"
                color="#fff"
                type="submit"
              >
                ADD
              </Button>

              <Box>
                <Button
                  size="xs"
                  variant="transparent"
                  onClick={() => {
                    setToggleTimer(false);
                  }}
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
          </Flex>
        </form>

        <div className={styles.dataShowerContainer}>
          {timeTrackerData.length > 0 ? (
            <div>                       
                {timeTrackerData.map((el) => (
                  <Box key={el.id}>                  
                    <TrackerShower data={el} />
                  </Box>
                ))}           
            </div>
          ) : (
            <div className={styles.emptyBox}>
              <EmptyBox />
            </div>
          )}
        </div>
=======
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
>>>>>>> master
      </Box>
    </>
  );
};

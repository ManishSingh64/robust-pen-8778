import {
    Box,
    Button,
    Flex,
    Heading,
    Link,
    useColorModeValue,
    Input,
    InputGroup,
    InputLeftElement,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Checkbox,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import DashboardNavbar from "../Components/DashboardNavbar";
import { SearchIcon, ChevronDownIcon, ArrowUpDownIcon } from "@chakra-ui/icons";
// import CreateProjectModal from "../components/CreateProjectModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { CreateProjectModal } from "../../components/CreateProjectModal";
import { deleteProject, getProjects } from "../../store/Tasks/tasks.action";
import { CreateMembersmodel } from "../../components/CreateMembersmodel";
import { getItem } from "../../Utils/localStorage";

const Links = ["Active", "Client", "Access", "Billing"];



export const Teams = () => {

    const [cli, setcli] = useState("member")
    const [emails, setemails] = useState([])
    const [username2, setusername2] = useState("")
    const [userarr, setuserarr] = useState([])

    console.log(userarr)
    return (
        <div
            style={{
                padding: "20px",
                backgroundColor: "#f2f6f8",
            }}
        >



            <Flex justifyContent={"space-between"} mt={10}>
                <Heading size={"lg"} fontWeight={"400"} color={"black.500"}>
                    Team
                </Heading>

            </Flex>
            {/* <DashboardNavbar> */}
            <Flex>
                <Button variant={"outline"} onClick={() => setcli("member")} color={cli == "member" ? "white" : "black"} bgColor={cli == "member" ? "grey" : "white"}>Members</Button>
                <Button variant={"outline"} onClick={() => setcli("groups")} color={cli == "groups" ? "white" : "black"} bgColor={cli == "groups" ? "grey" : "white"}>Groups</Button>
                <Button variant={"outline"} onClick={() => setcli("remainder")} color={cli == "remainder" ? "white" : "black"} bgColor={cli == "remainder" ? "grey" : "white"}>Remainder</Button>

            </Flex>

            {cli == "member" &&
                <Box
                    // bg={useColorModeValue("gray.100", "gray.900")}
                    p={4}

                    bgColor="white"
                    h={["15rem", "auto"]}
                    border="1px"
                    borderColor={"gray.400"}
                >
                    <Flex
                        h={16}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        pt={[20, 0]}
                    ><Menu>
                            <MenuButton p={5} as={Button} >
                                Show All<ChevronDownIcon />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                        <Input ml={2} placeholder={"Search by name or email"} />
                    </Flex>




                    <Box textAlign={"right"} > <CreateMembersmodel setemails={setemails} /></Box>


                    <TableContainer border={"1px"} borderColor={"gray.300"} mt={1}>
                        <Table variant="stripe">
                            <Thead>
                                <Tr borderColor={"gray.300"} bgColor="#e4eaee">
                                    <Td fontSize={"sm"} colSpan={9} color={"gray.500"}>
                                        Members
                                    </Td>
                                </Tr>
                            </Thead>
                            <Tbody >
                                <Tr
                                    fontSize={"sm"}

                                    borderColor={"gray.300"}
                                    color={"gray.500"}
                                    display={"flex"} justifyContent={"space-between"}
                                >
                                    <Td>
                                        <Flex alignItems={"center"} gap={"2"}>
                                            NAME
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Flex alignItems={"center"} gap={"2"}>
                                            <Menu>

                                                <MenuButton p={0} m={0} as={Button} >
                                                    <ChevronDownIcon />
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>Download</MenuItem>
                                                    <MenuItem>Create a Copy</MenuItem>
                                                    <MenuItem>Mark as Draft</MenuItem>
                                                    <MenuItem>Delete</MenuItem>
                                                    <MenuItem>Attend a Workshop</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Flex>
                                    </Td>


                                </Tr>
                                {
                                    emails && emails.map((ele) => {
                                        return <Tr
                                            fontSize={"sm"}

                                            borderColor={"gray.300"}
                                            color={"gray.500"}
                                            display={"flex"} justifyContent={"space-between"}
                                        >
                                            <Td>
                                                <Flex alignItems={"center"} gap={"2"}>
                                                    {ele}
                                                </Flex>
                                            </Td>
                                            <Td>
                                                <Flex alignItems={"center"} gap={"2"}>
                                                    <Menu>

                                                        <MenuButton p={0} m={0} as={Button} >
                                                            <ChevronDownIcon />
                                                        </MenuButton>
                                                        <MenuList>
                                                            <MenuItem>Download</MenuItem>
                                                            <MenuItem>Create a Copy</MenuItem>
                                                            <MenuItem>Mark as Draft</MenuItem>
                                                            <MenuItem onClick={() => {
                                                                setemails(
                                                                    emails.filter((e) => e != ele))
                                                            }} >Delete</MenuItem>
                                                            <MenuItem>Attend a Workshop</MenuItem>
                                                        </MenuList>
                                                    </Menu>
                                                </Flex>
                                            </Td>


                                        </Tr>
                                    })
                                }


                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>}





            {cli == "groups" &&
                <Box
                    //bg={useColorModeValue("gray.100", "gray.900")}
                    p={4}

                    bgColor="white"
                    h={["15rem", "auto"]}
                    border="1px"
                    borderColor={"gray.400"}
                >
                    <Flex
                        h={16}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        pt={[20, 0]}
                    >
                        <Input ml={1} onChange={(e) => setusername2(e.target.value)} placeholder={"add new user group"} />
                        <Button onClick={() => setuserarr((ele) => [...ele, username2])} ml={4}>Add </Button>
                    </Flex>






                    <TableContainer border={"1px"} borderColor={"gray.300"} mt={1}>
                        <Table variant="stripe">
                            <Thead>
                                <Tr borderColor={"gray.300"} bgColor="#e4eaee">
                                    <Td fontSize={"sm"} colSpan={9} color={"gray.500"}>
                                        Groups
                                    </Td>
                                </Tr>
                            </Thead>
                            <Tbody >
                                <Tr
                                    fontSize={"sm"}

                                    borderColor={"gray.300"}
                                    color={"gray.500"}
                                    display={"flex"} justifyContent={"space-between"}
                                >
                                    <Td>
                                        <Flex alignItems={"center"} gap={"2"}>
                                            ACCESS
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Flex alignItems={"center"} gap={"2"}>
                                            <Menu>

                                                <MenuButton p={0} m={0} as={Button} >
                                                    <ChevronDownIcon />
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>Download</MenuItem>
                                                    <MenuItem>Create a Copy</MenuItem>
                                                    <MenuItem>Mark as Draft</MenuItem>
                                                    <MenuItem>Delete</MenuItem>
                                                    <MenuItem>Attend a Workshop</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Flex>
                                    </Td>


                                </Tr>

                                {
                                    userarr && userarr.map((ele) => {
                                        return <Tr
                                            key={ele}
                                            fontSize={"sm"}

                                            borderColor={"gray.300"}
                                            color={"gray.500"}
                                            display={"flex"} justifyContent={"space-between"}
                                        >
                                            <Td>
                                                <Flex alignItems={"center"} gap={"2"}>
                                                    {ele}
                                                </Flex>
                                            </Td>
                                            <Td>
                                                <Flex alignItems={"center"} gap={"2"}>
                                                    <Menu>

                                                        <MenuButton p={0} m={0} as={Button} >
                                                            <ChevronDownIcon />
                                                        </MenuButton>
                                                        <MenuList>

                                                            <MenuItem onClick={() => {
                                                                setuserarr(
                                                                    userarr.filter((e) => e != ele))
                                                            }} >Delete</MenuItem>

                                                        </MenuList>
                                                    </Menu>
                                                </Flex>
                                            </Td>


                                        </Tr>
                                    })
                                }


                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>}





            {cli == "remainder" &&
                <Box
                    // bg={useColorModeValue("gray.100", "gray.900")}
                    p={4}

                    bgColor="white"
                    h={["15rem", "auto"]}
                    border="1px"
                    borderColor={"gray.400"}
                >
                    <Flex
                        h={16}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        pt={[20, 0]}
                    ><Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Show All
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                        <Input ml={2} placeholder={"Search by name or email"} />
                    </Flex>




                    <Box textAlign={"right"} > </Box>
                    <Text color={"red"} fontSize={"larger"} >For Premium Users Only</Text>

                    <TableContainer border={"1px"} borderColor={"gray.300"} mt={1}>
                        <Table variant="stripe">
                            <Thead>
                                <Tr borderColor={"gray.300"} bgColor="#e4eaee">
                                    <Td fontSize={"sm"} colSpan={9} color={"gray.500"}>
                                        Reminder
                                    </Td>
                                </Tr>
                            </Thead>
                            <Tbody >
                                <Tr
                                    fontSize={"sm"}

                                    borderColor={"gray.300"}
                                    color={"gray.500"}
                                    display={"flex"} justifyContent={"space-between"}
                                >
                                    <Td>
                                        <Flex alignItems={"center"} gap={"2"}>
                                            NAME
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Flex alignItems={"center"} gap={"2"}>
                                            <Menu>

                                                <MenuButton p={0} m={0} as={Button} >
                                                    <ChevronDownIcon />
                                                </MenuButton>
                                                <MenuList>
                                                    <MenuItem>Download</MenuItem>
                                                    <MenuItem>Create a Copy</MenuItem>
                                                    <MenuItem>Mark as Draft</MenuItem>
                                                    <MenuItem>Delete</MenuItem>
                                                    <MenuItem>Attend a Workshop</MenuItem>
                                                </MenuList>
                                            </Menu>
                                        </Flex>
                                    </Td>


                                </Tr>



                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>}
            {/* </DashboardNavbar> */}
        </div>
    );
};

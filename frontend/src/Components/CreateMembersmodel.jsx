import {
    Box,
    Button,
    Checkbox,
    Divider,
    Flex,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
    Select,
    SimpleGrid,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import { useState } from "react";

//   import { createProject, getProjects } from "../Stores/Tasks/tasks.actions";
import { setItem } from "../Utils/localStorage";


export function CreateMembersmodel({ setemails }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("outside");
    const [projectName, setProjectName] = useState("");


    const handleCreate = () => {
        console.log(projectName)
        setemails((ele) => [...ele, projectName])

        onClose()

    };
    const btnRef = React.useRef(null);
    return (
        <>
            <Button
                ref={btnRef}
                onClick={onOpen}
                color={"white"}
                border={"1px"}
                fontWeight={400}
                bgColor={"blue.400"}
                borderRadius={"sm"}
                _hover={{
                    color: "blue.400",
                    bgColor: "white",
                    borderColor: "blue.400",
                    border: "1px",
                }}
                size={"md"}
            >
                Add New Member
            </Button>

            <Modal
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior={scrollBehavior}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Member</ModalHeader>
                    <ModalCloseButton />
                    <Divider />
                    <ModalBody>
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
                            <Flex>
                                <Input
                                    type={"email"}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    placeholder="Enter Email"
                                ></Input>
                            </Flex>
                            <br></br>
                            <Flex flexDir={"row"}>
                                <Flex alignItems={"center"} gap={"1"} ml={5}>
                                    <Checkbox isChecked /> Send an invite email
                                </Flex>
                            </Flex>

                        </SimpleGrid>
                    </ModalBody>

                    <ModalFooter>
                        <Button m={1} variant={"outline"} colorScheme={"red"} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button m={1} onClick={handleCreate} colorScheme={"blue"}>
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

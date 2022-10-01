import {
  Box,
  Container,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={20}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack textAlign="left" spacing={3}>
            <Box>
              <Link>
                <Image
                  pb={2}
                  src="https://clockify.me/assets/images/clockify-logo.svg"
                ></Image>
              </Link>
              <Text fontSize={"xs"} w={"15rem"}>
                The world's leading time tracker and timesheet software for
                teams
              </Text>
            </Box>
            <Text fontSize={"sm"} _hover={{ color: "blue.400" }}>
              <Link to={"/signup"}>SIGN UP FREE</Link>
            </Text>
            <Text fontSize={"sm"} _hover={{ color: "blue.400" }}>
              <Link to={"/login"}>LOG IN</Link>
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>PRODUCT</ListHeader>
            <Link>Features</Link>
            <Link>Download</Link>
            <Link>Integrations</Link>
            <Link>Upgrade</Link>
            <Link>API</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>SOLUTION</ListHeader>
            <Link>Time clock</Link>
            <Link>Timecard calculator</Link>
            <Link>Timesheet</Link>
            <Link>Reporting</Link>
            <Link>Scheduling</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>COMPANY</ListHeader>
            <Link>About us</Link>
            <Link>Customers</Link>
            <Link>
              <Text fontSize={"xs"}>WE ALSO MAKE</Text>
            </Link>
            <HStack>
              <Image src="https://clockify.me/assets/images/pumble-icon-color.svg"></Image>
              <Link>Pumble</Link>
            </HStack>
            <HStack>
              <Image src="https://clockify.me/assets/images/plaky-icon-color.svg"></Image>
              <Link>Plaky</Link>
            </HStack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>SUPPORT</ListHeader>
            <Link>Help</Link>
            <Link>Tutorials</Link>
            <Link>Resources</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

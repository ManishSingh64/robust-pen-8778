import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import Testimonials from "../Components/Testimonials";

export const ClockyCards = ({ icon, heading, text }) => {
  return (
    <Box
      m="auto"
      w="85%"
      pt="40px"
      pb="50px"
      pl="50px"
      pr="50px"
      boxShadow="0 2px 6px 0 rgb(1 87 155 / 15%)"
      style={{ transition: "all 0.1s ease-in" }}
      cursor="pointer"
      _hover={{ boxShadow: "2px 2px 5px 2px rgb(1 87 155 / 15%)" }}
    >
      <Flex justifyContent="flex-start" flexDir="column" gap={3}>
        <Icon as={icon} w="45px" h="44px" color="blue.400" />
        <Heading fontWeight={400} size="lg" color="gray.700">
          {heading}
        </Heading>
        <Link to="/">
          <Text color="gray">{text}</Text>
          <Text color="blue.700">Learn more →</Text>{" "}
        </Link>
      </Flex>
    </Box>
  );
};

const Home = () => {
  const whyClockify = [
    {
      icon: RiTeamLine,
      heading: "Manage team",
      text: "Track attendance for payroll and accounting, see who works on what, and manage workload among teams.",
      id: 1,
    },
    {
      icon: BsClockHistory,
      heading: "Business intelligence",
      text: "Track time and analyze your company's efficiency across projects, clients, departments, and employees.",
      id: 2,
    },
    {
      icon: AiOutlineDollarCircle,
      heading: "Bill clients",
      text: "Track billable time and expenses, show clients how much you've worked, see how much you've earned, and create invoices.",
      id: 3,
    },
    {
      icon: BiTargetLock,
      heading: "Boost productivity",
      text: "Track time you spend on activities, see where your time goes, and improve your time management skills.",
      id: 4,
    },
  ];

  const reviewR1 = [
    {
      title: "It has greatly improved our business",
      feedback:
        "Before Clockify we had no idea of how long we were spending on each event.",
      client: "— Hilary Raeside, Executive Assistant",
      id: 1,
    },
    {
      title: "Very useful and intuitive",
      feedback:
        "Extremely comfortable. Ads free. Amazing in terms of customer support.",
      client: "— Ivan Napolskykh, Software Engineer,",
      id: 2,
    },
    {
      title: "Trackers don't get much better than this",
      feedback:
        "I track my time for all the tasks I perform; work-related and other.",
      client: "— Ivan Arsenov, Recruitment Manager",
      id: 3,
    },
    {
      title: "A game-changer for remote work",
      feedback:
        "I can track on my phone - a few taps and I'm ready to get onto my work.",
      client: "— Kerri MacKay, Coordinator",
      id: 4,
    },
    {
      title: "Great experience",
      feedback: "It has really helped me become more organized.",
      client: "— Lauren Leonard, Illustrator",
      id: 5,
    },
    {
      title: "Grows with you!",
      feedback:
        "I love how Clockify allows my contractors to independently log billable hours.",
      client: "— Cameron Suorsa, Entrepreneur",
      id: 6,
    },
    {
      title: "An amazing experience!",
      feedback:
        "Works exactly like you'd hope, feature-rich, and has helped us realize profits.",
      client: "— Torre Capistran, Entrepreneur",
      id: 7,
    },
    {
      title: "Affordable price and support",
      feedback:
        "New features appearing every month. Great and helpful customer support.",
      client: "— Maciej Tkaczyk, Manager",
      id: 8,
    },
  ];
  const reviewR2 = [
    {
      title: "Fantastic from start to finish",
      feedback: "I absolutely love how this software has so many features",
      client: "— Ollie Yates, CEO",
      id: 1,
    },
    {
      title: "The only app to keep you accountable",
      feedback:
        "The best app out there which allows us to keep a tab on our productivity.",
      client: "— Ze Belchior, Managing Director,",
      id: 2,
    },
    {
      title: "One of the best values available online",
      feedback:
        "Really good. Overall, this is a TREMENDOUS value for the price.",
      client: "— Patrick Carver, Entrepreneur",
      id: 3,
    },
    {
      title: "Best time tracker",
      feedback: "Clockify has become a basic in my set of freelance tools.",
      client: "— Luis Miguel Rivas Zepeda, Software Engineer",
      id: 4,
    },
    {
      title: "Seamless time tracking",
      feedback:
        "Clockify is so easy to use and intuitive. The learning curve is almost none.",
      client: "— Sheila Zayas, Graphic Design",
      id: 5,
    },
    {
      title: "Clockify is scary good!",
      feedback:
        "It is a powerful and often frightening insight into your own behavior.",
      client: "— Skyler Bird, Web Designer",
      id: 6,
    },
    {
      title: "Finally an intuitive online time logger",
      feedback:
        "I like that it is available to me online and can use it wherever I am.",
      client: "— Michele Wong, Entrepreneur",
      id: 7,
    },
    {
      title: "Amazing timer that gets the job done",
      feedback:
        "Gives a very clear idea about where my time is being spent. It helps in self-development!",
      client: "— Anirudh, Consulting Analyst",
      id: 8,
    },
  ];
  const reviewR3 = [
    {
      title: "Works great for startups",
      feedback:
        "We grew from a couple people to almost 80 and it worked perfectly the whole time!",
      client: "— Zachary Gaskill, Sales Manager",
      id: 1,
    },
    {
      title: "Must-use productivity software",
      feedback: "Time-tracking is smoother, productivity is easier.",
      client: "— Ellen Mubwanda, Copywriter",
      id: 2,
    },
    {
      title: "May be the best time tracker there is!",
      feedback:
        "Clockify has been an essential tool for our team to track time on a daily basis.",
      client: "— Camille Ang, Entrepreneur",
      id: 3,
    },
    {
      title: "Fantastic",
      feedback:
        "Makes it incredibly easy to record time and attach pdf reports to invoices.",
      client: "— David Jackson, Consultant",
      id: 4,
    },
    {
      title: "Best time tracking software!",
      feedback:
        "I use Clockify for work, but it also lets me know exactly what I am doing in my day!",
      client: "— Marc Wolfe, Marketing Manager",
      id: 5,
    },
    {
      title: "Best timesheet software on the market",
      feedback:
        "Easy to use. Quick to maneuver. Excellent reporting and administration.",
      client: "— Anurag K, Database Engineer,",
      id: 6,
    },
    {
      title: "Wonderful for tracking productivity",
      feedback:
        "I enjoy it so much I use outside of work to track my own personal self-development.",
      client: "— Jessup S, Operations Associate",
      id: 7,
    },
    {
      title: "I feel more productive!",
      feedback:
        "It's really encouraging to look back and see how much I've accomplished!",
      client: "— Kristen Eisentrager, Creative Coordinator",
      id: 8,
    },
  ];
  return (
    <div>
      <Box w={["", "80%"]} m="auto">
        <Text fontSize={["2xl", "4xl"]} textAlign="center" fontWeight={400}>
          The most popular free{" "}
          <span style={{ color: "#03a9f4" }}>time tracker</span> for teams
        </Text>
      </Box>
      <Box w={["80%", "45%"]} m="auto">
        <Text fontSize={["sm", "xl"]} textAlign="center">
          Time tracking software used by millions. Clockify is a time tracker
          and timesheet app that lets you track work hours across projects.
          Unlimited users, free forever.
          <span
            style={{
              color: "#fdd866",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              fontSize: "medium",
            }}
          >
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <Text
              fontSize={["xs", "sm"]}
              textAlign="center"
              color="gray"
              ml="5"
            >
              4,000+ reviews
            </Text>
          </span>
        </Text>
      </Box>
      <Flex justifyContent="center" m={5} flexDir="column" alignItems="center">
        <Button
          color="white"
          pl={20}
          pr={20}
          boxShadow="md"
          _hover={{ bg: "blue.400" }}
          bgColor="#03A9F4"
          borderBottom={"4px solid #008CCF"}
          w="300px"
          h="56px"
        >
          <Link to="/tracker">
            <Text fontWeight={400} fontSize={["xs", "md"]}>
              START TRACKING TIME — IT'S FREE!
            </Text>
          </Link>
        </Button>
        <Button
          p={0}
          colorScheme="none"
          color="blue.400"
          _hover={{ textDecoration: "underline" }}
        >
          <Image src="https://clockify.me/assets/images/signed-up-icon.svg"></Image>
          <Text fontSize="xs" ml="1">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              134,602 people signed up last month
            </a>
          </Text>
        </Button>
        <Image
          src="https://clockify.me/assets/images/customers-light-gray-3.svg"
          mt={10}
          mb={7}
        ></Image>
        <Box
          width={["350px", "450px", "700px", "900px", "1180px"]}
          height="610px"
        >
          <ReactPlayer
            width={"100%"}
            height="100%"
            url="https://youtu.be/NMZhFs_b0Aw"
          />
        </Box>
      </Flex>
      <VStack maxW="xl" m="auto" mt={20}>
        <Text fontSize={["lg", "4xl"]}>Time management features</Text>
        <Text color="gray" fontSize={["md", "xl"]} textAlign="center">
          Track productivity, attendance, and billable hours with a simple time
          tracker and timesheet.
        </Text>
      </VStack>
      <SimpleGrid columns={[1, 2]} mt={20}>
        <Flex gap={5} justifyContent="left" flexDir="column" m="auto">
          <Box>
            <Heading size="sm" color="gray">
              TIMEKEEPING
            </Heading>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Timer
            </Heading>
            <Text color="gray" fontSize="sm">
              Track work hours in real time.
            </Text>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Timesheet
            </Heading>
            <Text color="gray" fontSize="sm">
              Enter time in weekly timesheet.
            </Text>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Calendar
            </Heading>
            <Text color="gray" fontSize="sm">
              Visually block out and manage time.
            </Text>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Auto tracker
            </Heading>
            <Text color="gray" fontSize="sm">
              Track apps and website you use.
            </Text>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Kiosk
            </Heading>
            <Text color="gray" fontSize="sm">
              Clock in from a shared device.
            </Text>
          </Box>
        </Flex>
        <Box m="auto">
          <Image src="https://clockify.me/assets/images/feature-time-tracker-methods.svg"></Image>{" "}
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]} mt={20}>
        <Box m="auto">
          <Image src="https://clockify.me/assets/images/feature-time-reporting-activity.svg"></Image>{" "}
        </Box>
        <Flex gap={5} justifyContent="left" flexDir="column" m="auto">
          <Box>
            <Heading size="sm" color="gray">
              REPORTING
            </Heading>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Reports
            </Heading>
            <Text color="gray" fontSize="sm">
              Analyze and export tracked time.
            </Text>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Activity
            </Heading>
            <Text color="gray" fontSize="sm">
              See who works on what.
            </Text>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Rates
            </Heading>
            <Text color="gray" fontSize="sm">
              See earning, cost, and traffic.
            </Text>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Progress
            </Heading>
            <Text color="gray" fontSize="sm">
              Track project esimates and budget.
            </Text>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Location
            </Heading>
            <Text color="gray" fontSize="sm">
              See visited sites and routes.
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={[1, 2]} mt={20}>
        <Flex gap={5} justifyContent="left" flexDir="column" m="auto">
          <Box>
            <Heading size="sm" color="gray">
              MANAGEMENT
            </Heading>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Scheduling
            </Heading>
            <Text color="gray" fontSize="sm">
              Schedule works, assignment and shifts.
            </Text>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Time off
            </Heading>
            <Text color="gray" fontSize="sm">
              Manage leaves and holidays.
            </Text>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Approval
            </Heading>
            <Text color="gray" fontSize="sm">
              Submit and approve timesheets.
            </Text>
          </Box>
          <Box
            color="gray.700"
            _hover={{ color: "blue.400", cursor: "pointer" }}
          >
            <Heading mb="1" size="sm">
              Invoicing
            </Heading>
            <Text color="gray" fontSize="sm">
              Create invoices and billable time.
            </Text>
          </Box>
          <Box _hover={{ color: "blue.400", cursor: "pointer" }}>
            <Heading mb="1" size="sm" color="gray.700">
              Expenses
            </Heading>
            <Text color="gray" fontSize="sm">
              Record project expenses and fees.
            </Text>
          </Box>
        </Flex>
        <Box>
          <Image src="https://clockify.me/assets/images/feature-team-scheduling.svg"></Image>{" "}
        </Box>
      </SimpleGrid>
      <Text textAlign="center" mt="20">
        <Button
          bgColor="#03A9F4"
          borderBottom="4px solid #008CCF"
          w="280px"
          h="56px"
          _hover={{ bgColor: "blue.500" }}
        >
          <Text color="white" fontWeight="400">
            SEE ALL FEATURES
          </Text>
        </Button>
      </Text>
      <br />
      <VStack maxW="xl" m="auto" mt={20}>
        <Text fontSize={["lg", "4xl"]} color="gray.700">
          Time tracking apps
        </Text>
        <Text color="gray" fontSize={["md", "xl"]} textAlign="center">
          Clockify works across devices. Track time from anywhere — all data is
          synced online.
        </Text>
      </VStack>
      <SimpleGrid columns={[1, 2]} width="70%" m="auto" mt="10" gap="20">
        <VStack>
          <Image src="https://clockify.me/assets/images/time-tracking-app-desktop.png"></Image>
          <Text fontWeight="medium" fontSize="md">
            DESKTOP APP
          </Text>
          <ButtonGroup
            colorScheme="none"
            color="blue.400"
            variant="outline"
            borderColor="blue.400"
          >
            <Button _hover={{ bgColor: "blue.400", color: "white" }} w="110px">
              Window
            </Button>
            <Button _hover={{ bgColor: "blue.400", color: "white" }} w="110px">
              Mac
            </Button>
            <Button _hover={{ bgColor: "blue.400", color: "white" }} w="110px">
              Linux
            </Button>
          </ButtonGroup>
        </VStack>
        <VStack>
          <Image src="https://clockify.me/assets/images/time-tracking-app-web.png"></Image>
          <Text fontWeight="medium" fontSize="md">
            WEB APP
          </Text>
          <ButtonGroup
            color="blue.400"
            colorScheme="none"
            variant="outline"
            borderColor="blue.400"
          >
            <Button _hover={{ bgColor: "blue.400", color: "white" }} w="110px">
              Edge
            </Button>
            <Button _hover={{ bgColor: "blue.400", color: "white" }} w="110px">
              Chrome
            </Button>
            <Button _hover={{ bgColor: "blue.400", color: "white" }} w="110px">
              Firefox
            </Button>
          </ButtonGroup>
        </VStack>
      </SimpleGrid>
      <SimpleGrid
        columns={[1, 2]}
        width={"70%"}
        m={"auto"}
        mt={"20"}
        gap={"20"}
      >
        <VStack>
          <Image src="https://clockify.me/assets/images/time-tracking-app-mobile.png"></Image>
          <Text fontWeight="medium" fontSize="md">
            MOBILE APP
          </Text>
          <ButtonGroup
            colorScheme="none"
            color="blue.400"
            variant="outline"
            borderColor="blue.400"
          >
            <Button _hover={{ bgColor: "blue.400", color: "white" }} w="110px">
              Android
            </Button>
            <Button _hover={{ bgColor: "blue.400", color: "white" }} w="110px">
              iOS
            </Button>
          </ButtonGroup>
        </VStack>
        <VStack>
          <Image src="https://clockify.me/assets/images/time-tracking-app-kiosk.png"></Image>
          <Text fontWeight="medium" fontSize="md">
            KIOSK APP
          </Text>
          <ButtonGroup
            colorScheme="none"
            color="blue.400"
            variant="outline"
            borderColor="blue.400"
          >
            <Button _hover={{ bgColor: "blue.400", color: "white" }} w="110px">
              Any Device
            </Button>
          </ButtonGroup>
        </VStack>
      </SimpleGrid>
      <Text textAlign="center" mt="20" fontSize="4xl" color="gray.700">
        Why track time with Clockify
      </Text>
      <SimpleGrid
        w={["80%"]}
        m="auto"
        columns={{ base: "1", md: "2" }}
        gap="10"
        mt={20}
      >
        {whyClockify.map((ele) => {
          return (
            <ClockyCards
              id={ele.id}
              icon={ele.icon}
              heading={ele.heading}
              text={ele.text}
            />
          );
        })}
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: "1", md: "2" }}
        w="50%"
        gap={[20]}
        m="auto"
        mt={20}
        mb={20}
      >
        <Image src="https://clockify.me/assets/images/free-forever-clock-4.svg"></Image>
        <Flex flexDir="column" h="60%" m="auto" w="100%">
          <Heading color="blue.400" size="3xl">
            FREE
          </Heading>
          <Heading color="blue.400" size="lg">
            FOREVER!
          </Heading>
          <List mt={5}>
            <ListItem>
              <ListIcon as={GiCheckMark} color={"blue.400"} />
              Unlimited uses
            </ListItem>
            <ListItem>
              <ListIcon as={GiCheckMark} color={"blue.400"} />
              Unlimited tracking
            </ListItem>
            <ListItem>
              <ListIcon as={GiCheckMark} color={"blue.400"} />
              Unlimited projects
            </ListItem>
          </List>
          <Link to={"/"}>
            {" "}
            <Text mt={5} color={"blue.400"} _hover={{ textDecor: "underline" }}>
              Upgrade →
            </Text>{" "}
          </Link>
        </Flex>
      </SimpleGrid>
      <Text textAlign={"center"} fontSize={"sm"} color={"gray"}>
        #1 SUPPORT IN SOFTWARE
      </Text>
      <Heading
        mt={2}
        mb={2}
        textAlign={"center"}
        fontWeight={"400"}
        size={["lg", "xl"]}
        color={"gray.600"}
      >
        World-class customer support
      </Heading>
      <Text textAlign={"center"} fontSize={["lg", "2xl"]} color={"gray"}>
        We're here 24 hours a day, every day of the week, including holidays.
      </Text>
      <SimpleGrid
        // columns={{ base: "2", md: "4" }}
        columns={[2, 2, 2, 4]}
        gap={[2, 7]}
        w={["90%", "57%"]}
        m={"auto"}
        mt={10}
      >
        <Flex alignItems={"flex-start"} gap={2}>
          <Box>
            <Image
              mt={2}
              src="https://clockify.me/assets/images/support-phone.svg"
            ></Image>{" "}
          </Box>
          <Box>
            <Heading fontWeight={"400"} size={["sm", "lg"]} color={"gray.600"}>
              24/7
            </Heading>
            <Text color={"gray"} fontSize={["xs", "md"]}>
              support anytime, anywhere
            </Text>
          </Box>
        </Flex>
        <Flex alignItems={"flex-start"} gap={2}>
          <Box>
            <Image
              mt={2}
              src="https://clockify.me/assets/images/support-mail.svg"
            ></Image>{" "}
          </Box>
          <Box>
            <Heading fontWeight={"400"} size={["sm", "lg"]} color={"gray.600"}>
              1h
            </Heading>
            <Text color={"gray"} fontSize={["xs", "md"]}>
              average response time
            </Text>
          </Box>
        </Flex>
        <Flex alignItems={"flex-start"} gap={2}>
          <Box>
            <Image
              mt={2}
              src="https://clockify.me/assets/images/support-heart.svg"
            ></Image>{" "}
          </Box>
          <Box>
            <Heading fontWeight={"400"} size={["sm", "lg"]} color={"gray.600"}>
              95%
            </Heading>
            <Text color={"gray"} fontSize={["xs", "md"]}>
              satisfaction score (12k+ ratings)
            </Text>
          </Box>
        </Flex>
        <Flex alignItems={"flex-start"} gap={2}>
          <Box>
            <Image
              mt={2}
              src="https://clockify.me/assets/images/support-uptime.svg"
            ></Image>{" "}
          </Box>
          <Box>
            <Heading fontWeight={"400"} size={["sm", "lg"]} color={"gray.600"}>
              99.99%
            </Heading>
            <Text color={"gray"} fontSize={["xs", "md"]}>
              highest uptime levels
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>
      <Flex flexDir="column" alignItems="center" mt={10}>
        <Button
          w="10rem"
          variant="outline"
          color="blue.400"
          fontWeight="400"
          _hover={{ bgColor: "blue.400", color: "white" }}
          borderRadius="md"
          borderColor="blue.400"
        >
          Contact us
        </Button>
        <Text fontSize={"xs"} color={"gray"} mt={3}>
          EMAIL • PHONE • CHAT
        </Text>
      </Flex>

      <Divider mt={20} mb={20} />

      <Text textAlign={"center"} fontSize={"sm"} color={"gray"}>
        #1 RATED SOFTWARE
      </Text>
      <Heading
        mt={2}
        mb={2}
        textAlign={"center"}
        fontWeight={"400"}
        size={["lg", "xl"]}
        color={"gray.600"}
      >
        Join millions of happy users
      </Heading>
      <Text textAlign={"center"} fontSize={["lg", "2xl"]} color={"gray"}>
        Clockify is the best rated time tracking software with 4,000+ reviews.
      </Text>

      <Flex
        wrap={"nowrap"}
        flexDir={"row"}
        overflowX={"hidden"}
        justifyContent={"left"}
        mt={20}
        mb={20}
      >
        <Box minW={"2200px"}>
          <Image
            maxW={"100%"}
            _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
            transition="1s"
            src="https://clockify.me/assets/images/customer-feedback-logo-expanded-3.svg"
          ></Image>
        </Box>
      </Flex>
      <Testimonials data={reviewR1} direction={"right"} />
      <Testimonials data={reviewR2} direction={"left"} />
      <Testimonials data={reviewR3} direction={"right"} />
      <Heading
        mt={20}
        mb={2}
        textAlign={"center"}
        fontWeight={"400"}
        size={["lg", "xl"]}
        color={"gray.600"}
      >
        Start tracking time with Clockify
      </Heading>
      <Text textAlign={"center"} fontSize={["xs", "sm"]} color={"gray"}>
        24/7 Support • Cancel Anytime • Free Forever
      </Text>
      <Flex flexDir={"column"} alignItems={"center"} mt={10}>
        <Button
          color={"white"}
          p={[1, 7]}
          boxShadow={"md"}
          _hover={{ bg: "blue.400" }}
          bgColor={"#03A9F4"}
          borderBottom={"4px solid #008CCF"}
          w={"280px"}
          h={"56px"}
        >
          <Link to="/signup">
            <Text fontWeight={400} fontSize={["xs", "md"]}>
              CREATE FREE ACCOUNT
            </Text>
          </Link>
        </Button>
        <Button
          p={0}
          colorScheme={"none"}
          color={"blue.400"}
          _hover={{ textDecoration: "underline" }}
        >
          <Image
            src={"https://clockify.me/assets/images/signed-up-icon.svg"}
          ></Image>
          <Text fontSize={"xs"} ml={"1"}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              134,602 people signed up last month
            </a>
          </Text>
        </Button>
      </Flex>
    </div>
  );
};

export default Home;

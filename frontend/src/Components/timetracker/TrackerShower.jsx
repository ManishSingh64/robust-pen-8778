import React from 'react'
import { Box, Button, Flex, Input, Link, Tag } from '@chakra-ui/react'

const TrackerShower = () => {
  return (
    <Flex>
      <Flex>
        <Input type='text' name='' value='' placeholder='' />
        <Link>Hello: Maya</Link>
        <Tag>LOP, TOP</Tag>
      </Flex>
      <Flex>
        <Box>$</Box>
        <Box><Input/></Box>
        <Box><Input/></Box>
        <Box><Input type='calender' /></Box>
        <Box><Input/></Box>
        <Button>Play</Button> 
        <Button>:</Button>   
      </Flex>
    </Flex>
  )
}

export default TrackerShower

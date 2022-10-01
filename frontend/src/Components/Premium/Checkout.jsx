import {  Flex } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import CardAdd from './CardAdd'
import ProductSection from './ProductSection'

const Checkout = () => {
  // let [loading,setLoading] = useState(true);
  // setTimeout(()=>{
  //   setLoading(false);
  // },10000)
  // if(loading){
  //   return <h1>Loading</h1>
  // }
  return (
    <Flex justifyContent={'space-around'} gap='10' mx='10' my='5'>
      <ProductSection />
      <CardAdd/>
    </Flex>
  )
}

export default Checkout
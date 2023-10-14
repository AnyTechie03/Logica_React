import React from 'react'
import {Image,VStack,Text,Button} from '@chakra-ui/react'

export default function Card({amount,img, checkoutHandler}) {
    
  return (
    <VStack>
        {/* <Image src={img} boxSize={"64"} objectFit="cover"/> */}
        <Text>{amount}</Text>
        <Button onClick={checkoutHandler}>Pay Amount</Button>
    </VStack>
    )
}

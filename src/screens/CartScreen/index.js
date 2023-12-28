import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const CartScreen = () => {

  const CartItems=useSelector((state)=>state?.cart?.items)

  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})
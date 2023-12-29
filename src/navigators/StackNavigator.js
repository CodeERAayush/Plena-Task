import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
// import * as Screen from '@screens'
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import BottomTabNavigator from './BottomNavigator';
const StackNavigator = () => {

    const Stack = createStackNavigator()
    const _addScreen = (name,component) => {
        return (
            <Stack.Screen
                name={name}
                component={component}
            />)
    }

  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        {_addScreen("BottomTab",BottomTabNavigator)}
        {/* {_addScreen("Home",HomeScreen)} */}
        {_addScreen("Product",ProductDetailScreen)}
        {_addScreen("Cart",CartScreen)}
        </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})
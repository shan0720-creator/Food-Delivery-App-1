import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OrderPrepareScreen() {
    const navigation  = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
          //move to the delivery screen
          navigation.navigate('Delivery');
        },3000)
    })
  return (
    <View className="flex-1 bg-White justify-center item-center">
      <Image source = {require('../assets/images/delivery.gif')} className="h-80 w-80"/>
    </View>
  )
}
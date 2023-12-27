import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../../../assets/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Banner = () => {
  return (
    <View style={styles.banner_holder}>
      <Image
      source={Images?.banner}
      style={styles.banner_image}
      resizeMode='contain'
      />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    banner_image:{
        width: wp(100),
        height:hp(15),
        alignSelf:'flex-end',
        marginRight:-wp(5)
    },
    banner_holder:{
        width:wp(100),
        marginVertical:hp(2),
    }
})
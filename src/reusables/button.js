import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'

const CustomBtn = ({name,onPress}) => {
  return (
    <TouchableOpacity
            style={styles?.back_btn}
            onPress={()=>onPress()}
            >
              <AntDesign
              name={name}
              size={wp(3)}
              color={Colors?.Black}
              />
            </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    back_btn:{
        marginHorizontal:wp(1),
        height:hp(5),
        width:hp(5),
        backgroundColor:Colors.LightGrey,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:9999
      },
})
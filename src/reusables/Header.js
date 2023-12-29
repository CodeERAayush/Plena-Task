import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomBtn from './button'
import { useSelector } from 'react-redux'
import { Colors } from '../constants/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Fonts } from '../../assets/fonts'
import Icon, { Icons } from '../../assets/Icons/Icons'
const Header = ({navigation}) => {

    const CartItems = useSelector((state) => state?.cart?.items)

  return (
    <View style={styles?.header}>
          <CustomBtn
            name="left"
            onPress={() => navigation.goBack()}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Cart")}
            style={styles.notification}>
            <Text style={styles.notification_text}>
              {CartItems?.length}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Icon 
            type={Icons.SimpleLineIcons}
            name='handbag'
            size={22}
            color={Colors?.Black}
            style={{marginRight:wp(4)}}
            />
          </TouchableOpacity>
        </View>
  )
}

export default Header

const styles = StyleSheet.create({
    notification: {
        backgroundColor: Colors.darkYellow,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9999,
        height: wp(5),
        width: wp(5),
        position: 'absolute',
        zIndex: 1,
        right: wp(2),
        top: hp(2),
        paddingBottom: 1
      },
      notification_text: {
        fontSize: 14,
        fontFamily: Fonts?.Regular,
        color: Colors?.Black
      },
      header: {
        height: hp(8),
        marginBottom: hp(1),
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(94),
        alignSelf: 'center',
        justifyContent: 'space-between',
      },
})
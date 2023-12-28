import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts } from '../../../assets/fonts';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import { Images } from '../../../assets/Images';
import { useSelector } from 'react-redux';

const HeroSection = ({navigation}) => {

    const CartItems=useSelector((state)=>state?.cart?.items)

  return (
    <View style={styles.top_section}>
        <View style={styles.top_section_top}>
          <View style={styles.utilites}>
            <Text style={styles.greet_text}>Hey, Aayush</Text>
            <TouchableOpacity style={styles.notification}>
              <Text style={styles.notification_text}>
                {CartItems?.length}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
              <SimpleLineIcons
                name="handbag"
                size={22}
                color={Colors.White}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.search_holder}>
            <View style={styles?.search_holder_left}>
              <Image
                source={Images.search_icn}
                style={styles.searchIcon}
              />
            </View>
            <View style={styles?.search_holder_right}>
              <TextInput
              style={styles.search_input}
              placeholder='Search Products or store'
              placeholderTextColor={Colors?.black45}
              />
            </View>
          </View>

        </View>
        <View style={styles.top_section_bottom}>
          <View>
          <Text style={styles.sub_head}>DELIVERY TO</Text>
         <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.sub_head_val}>Green Way 3000, Sylhet</Text>
          <Feather
          name="chevron-down"
          size={18}
          color={Colors.black20}
          marginLeft={5}
          marginTop={5}
          />
         </View>
          </View>
          <View>
          <Text style={styles.sub_head}>WITHIN</Text>
         <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.sub_head_val}>1 Hour</Text>
          <Feather
          name="chevron-down"
          size={18}
          color={Colors.black20}
          marginLeft={5}
          marginTop={5}
          />
         </View>
          </View>
        </View>
        <View>

        </View>
      </View>
  )
}

export default HeroSection

const styles = StyleSheet.create({
    top_section: {
        height: hp(30),
        width: wp(100),
        backgroundColor: Colors.Primary
      },
      top_section_top: {
        height: '75%',
        width: wp(95),
        alignSelf: 'center',
      },
      top_section_bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
      },
      utilites: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: hp(2),
        paddingHorizontal: wp(4),
        alignItems: 'center'
      },
      greet_text: {
        fontFamily: Fonts.SemiBold,
        fontSize: 22,
        color: Colors.White
      },
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
      },
      search_holder:{
        backgroundColor:Colors.Secondary,
        height:hp(7),
        width:wp(90),
        alignSelf:'center',
        marginTop:hp(4),
        borderRadius:999,
        flexDirection:'row'
      },
      search_holder_right:{
        width:'70%',
        justifyContent:'center',
        marginLeft:wp(1)
      },
      search_holder_left:{
        width:'15%',
        height:hp(7),
        alignItems:'flex-end',
        justifyContent:'center'
      },
      search_input:{
        fontFamily:Fonts.Regular,
        fontWeight:'500',
      },
      sub_head:{
        fontSize:11,
        color:Colors.black45,
        letterSpacing:0.8,
        lineHeight:15.03
      },
      sub_head_val:{
        marginTop:hp(0.5),
        fontSize:14,
        fontWeight:'500',
        fontFamily:Fonts.Regular,
        color:Colors?.black20
      },
      searchIcon:{
        height:hp(2.5),
        width:hp(2.5),
        marginRight:wp(1)
      }
})
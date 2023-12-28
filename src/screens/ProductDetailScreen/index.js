import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { API } from '../../constants/api'
import axios from 'react-native-axios'
import Loader from '../../reusables/Loader'
import { Colors } from '../../constants/Colors'
import { useDispatch, useSelector } from 'react-redux'
import CustomBtn from '../../reusables/button'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Fonts } from '../../../assets/fonts'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Carousal from '../../reusables/Carousal'
import { add_item } from '../../slices/CartSlice'
const ProductDetailScreen = ({ navigation }) => {

  const CartItems = useSelector((state) => state?.cart?.items)


  const dispatch=useDispatch()

  const route = useRoute()
  const { id } = route?.params

  const [detail, setDetail] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    _getProductDetail()
  }, [])

  const _getProductDetail = () => {
    setLoading(true)
    axios.get(`${API.GET_SINGLE_PRODUCT}/${id}`)
      .then((r) => setDetail(r?.data))
      .catch(e => console.log(e))
      .finally(() => setLoading(false))
  }
  if (!loading)
    return (
      <View style={styles?.main_screen}>
        <StatusBar
          backgroundColor={Colors.White}
        />
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
            <SimpleLineIcons
              name="handbag"
              size={22}
              color={Colors.Black}
              style={{ marginRight: wp(4) }}
            />
          </TouchableOpacity>
        </View>
          <ScrollView
           style={{flex:1}}
          >

        <View style={styles?.data_holder}>
          <Text style={styles?.title}>{detail?.title}</Text>
          <Text style={styles?.brand}>{detail?.brand}</Text>
          <View style={styles?.review_holder}>
            <Text style={styles?.sub_text}>Rating: </Text>
            <AntDesign
              name="star"
              color={Colors?.darkYellow}
            />
            <Text style={[styles?.sub_text, { marginLeft: wp(1), fontSize: 12 }]}>{detail?.rating}</Text>
          </View>

        {/* carousal */}

          <Carousal
            images={detail?.images}
          />

          <View style={styles?.review_holder}>
            <Text style={[styles?.sub_text, { color: Colors?.Secondary, fontFamily: Fonts?.ExtraBold, fontSize: 16 }]}>{detail?.price} Rs.</Text>
            <View style={styles?.background_sup}>
              <Text style={[styles?.sub_text, { color: Colors?.White, fontSize: 12 }]}>{detail?.discountPercentage}% off</Text>
            </View>
          </View>
        </View>

<View style={styles?.button_holder}>
<TouchableOpacity onPress={()=>dispatch(add_item(detail))} style={[styles?.button,{backgroundColor:Colors?.White}]}><Text style={styles?.btn_text}>Add To Cart</Text></TouchableOpacity>
<TouchableOpacity style={[styles?.button,{width:wp(45)}]}><Text style={[styles?.btn_text,{color:Colors?.White}]}>Buy Now</Text></TouchableOpacity>
</View>

<View style={[styles?.data_holder,{flexDirection:'column',marginBottom:hp(2)}]}>
  <Text style={[styles?.sub_text,{color:'black',fontSize:16,fontFamily:Fonts?.Bold}]}>Details</Text>
  <Text style={styles?.sub_text}>
    {detail?.description}
  </Text>
</View>

      </ScrollView>
      </View>
    )
  else return <Loader />
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  main_screen: {
    backgroundColor: Colors?.White,
    flex: 1
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
  title: {
    fontFamily: Fonts?.Regular,
    color: Colors.Black,
    fontSize: 50,
  },
  brand: {
    fontFamily: Fonts?.SemiBold,
    color: Colors.Black,
    fontSize: 50,
  },
  data_holder: {
    paddingHorizontal: wp(5)

  },
  review_holder: {
    flexDirection: 'row',
    marginVertical: hp(1),
    alignItems: 'center'
  },
  sub_text: {
    color: Colors?.black60,
    fontFamily: Fonts?.Regular
  },
  background_sup: {
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
    marginHorizontal: wp(2),
    backgroundColor: Colors?.Primary,
    elevation: 1,
    borderRadius: 999
  },
  button:{backgroundColor:Colors?.Primary,width:wp(40),height:hp(8),alignItems:'center',justifyContent:'center',borderRadius:25,borderWidth:1,borderColor:Colors?.Primary},
  button_holder:{
    paddingHorizontal:wp(6),
    marginVertical:hp(3),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  btn_text:{
    fontSize:14,
    fontFamily:Fonts?.SemiBold,
    color:Colors?.Primary,
    letterSpacing:0.6
  }
})
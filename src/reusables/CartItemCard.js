import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Images } from '../../assets/Images'
import { Colors } from '../constants/Colors'
import { Fonts } from '../../assets/fonts'
import CustomBtn from './button'
import { useDispatch } from 'react-redux'
import { decrease_quantity, increase_quantity, remove_item } from '../slices/CartSlice'

const CartItemCard = ({item,navigation}) => {

  const dispatch=useDispatch()
    /*
    {"brand": "Golden",
     "category": "home-decoration",
      "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality", 
      "discountPercentage": 2.92,
       "id": 30,
        "images": ["https://i.dummyjson.com/data/products/30/1.jpg",
         "https://i.dummyjson.com/data/products/30/2.jpg",
          "https://i.dummyjson.com/data/products/30/3.jpg",
           "https://i.dummyjson.com/data/products/30/thumbnail.jpg"],
           "price": 30,
            "rating": 4.92,
             "stock": 54, 
             "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
              "title": "Key Holder"}  
     */
  return (
    <>
    <TouchableOpacity
    onPress={()=>navigation.navigate("Product",{id:item?.id})}
    style={styles.card}>
      <View style={styles.left_part}>
       {!item?.images?.length? <Image
          source={Images?.no_image}
          style={styles?.image}
          resizeMode='contain'
        />
        :
        <Image
        source={{uri:item?.images[0]}}
        style={styles?.image}
        resizeMode='contain'/>
        }
      </View>
      <View style={styles.middle_part}>
        <Text style={styles?.title}>{item?.title}</Text>
        <Text style={styles?.price}>Rs.{item?.price}</Text>
      </View>
      <View style={styles.right_part}>
          <CustomBtn
          name={"minus"}
          onPress={()=>item?.quantity<=1?dispatch(remove_item(item?.id)):dispatch(decrease_quantity(item?.id))}
          />
          <Text style={styles?.item_count}>{item?.quantity}</Text>
          <CustomBtn
          name={"plus"}
          onPress={()=>dispatch(increase_quantity(item?.id))}
          />
      </View>
    </TouchableOpacity>
      <View
      style={{backgroundColor:Colors?.LightGrey,height:1,width:wp(90),alignSelf:'center',marginVertical:hp(2)}}
      />
      </>
  )
}

export default memo(CartItemCard)

const styles = StyleSheet.create({
  card:{
    width:wp(90),
    alignSelf:'center',
    height:hp(7),
    flexDirection:'row',
    alignItems:'center',
  },
  left_part:{
    width:'20%',
    alignItems:'center',
    justifyContent:'center'
  },
  middle_part:{
    width:'45%',
    paddingHorizontal:wp(5)
  },
  right_part:{
    width:'35%',
    flexDirection:'row',
    paddingRight:wp(2),
    alignItems:'center'
  },
  image:{
    width:'100%',
    height:'70%'
  },
  title:{
    color:Colors?.Black,
    fontSize:15,
    fontFamily:Fonts?.Bold,
    fontWeight:'500',
    lineHeight:19.12
  },
  price:{
    color:Colors?.Black,
    fontSize:14,
    fontFamily:Fonts?.Regular,
    fontWeight:'400',
    lineHeight:20
  },
  item_count:{
    color:Colors?.Black,
    fontSize:14,
    fontFamily:Fonts?.Regular,
    lineHeight:19.12,
    fontWeight:'500',
    marginHorizontal:wp(2)
  }
})
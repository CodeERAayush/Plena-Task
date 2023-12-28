import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Images } from '../../assets/Images'
import { Fonts } from '../../assets/fonts'

const ItemCard = ({ item,onPressCart,naviagtion }) => {
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
        <Pressable 
        onPress={()=>naviagtion.navigate("Product",{id:item?.id})}
        style={styles?.card}>
            <View style={styles.img_holder}>
              { item?.images?.length
              ?
              <Image
              source={{uri:item?.images[0]}}
              style={[styles?.img,{width:'100%',height:'100%'}]}
              resizeMode='cover'
          />
            :
             <Image
                    source={Images?.no_image}
                    style={styles?.img}
                    resizeMode='contain'
                />}
            </View>
            <View style={styles.data_holder}>
                <View style={styles.heading_holder}>
                    <Text style={styles.price_text}>Rs. {item?.price}</Text>
                    <TouchableOpacity
                    onPress={()=>onPressCart(item)}
                    >
                    <Image
                    source={Images?.add_to_cart}
                    style={styles?.add_cart_btn}
                    />
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>
                    {item?.title?.length>21?item?.title.slice(0,20)+"...":item?.title}
                </Text>
            </View>
        </Pressable>
    )
}

export default ItemCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors?.LightGrey,
        width: widthPercentageToDP(45),
        marginVertical: heightPercentageToDP(1),
        height: heightPercentageToDP(28),
        borderRadius: widthPercentageToDP(5),
        marginHorizontal: widthPercentageToDP(2.5)
    },
    heading: {
        color: 'black',
    },
    img_holder: {
        width:'90%',
        alignSelf:"center",
        alignItems:'center',
        justifyContent:'center',
        height:'55%',
        marginTop:heightPercentageToDP(0.6),
        borderRadius:widthPercentageToDP(5),
        overflow:'hidden'
    },
    img: {
        height: heightPercentageToDP(10)
    },
    data_holder:{
        marginTop:heightPercentageToDP(3),
    },
    heading_holder:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        alignSelf:'center',
        paddingHorizontal:widthPercentageToDP(2)
    },
    price_text:{
        color:Colors?.Black,
        fontFamily:Fonts.Bold,
        fontWeight:'600',
        fontSize:14
    },
    add_cart_btn:{
        height:widthPercentageToDP(8),
        width:widthPercentageToDP(8),
    },
    title:{
        color:Colors?.black45,
        fontSize:12,
        marginHorizontal:widthPercentageToDP(4),
        letterSpacing:0.6,
        lineHeight:16,
        fontWeight:'400',
        fontFamily:Fonts.Medium
    }

})
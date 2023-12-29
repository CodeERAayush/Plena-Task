import { FlatList, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Fonts } from '../../../assets/fonts';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import HeroSection from '../../components/HeroSection';
import Banner from '../../components/Banner';
import Empty from '../../reusables/Empty';
import Loader from '../../reusables/Loader';
import { API } from '../../constants/api';
import axios from 'react-native-axios'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ItemCard from '../../reusables/ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { add_product } from '../../slices/ProductSlice';
import { add_item } from '../../slices/CartSlice';
const HomeScreen = ({ navigation }) => {

  const dispatch=useDispatch()

  const Products=useSelector((state)=>state?.products?.products)
  const CartItems=useSelector((state)=>state?.cart?.items)

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    _getAllProducts()
  }, [])


  const _getAllProducts = useCallback(() => {
    setLoading(true)
    const params = {
      url: API.GET_ALL_PRODUCTS,
      method: 'GET'
    }
    axios(params)
      .then(r => {
        dispatch(add_product(r?.data?.products))
        setProducts(r?.data?.products)})
      .catch(e => console.log("error in fetching products: ", e))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={styles.main_screen}>
      <StatusBar
        backgroundColor={Colors.Primary}
      />
        <FlatList
          data={Products}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item, index }) => <ItemCard
              item={item}
              key={index}
              onPressCart={(item)=>{
                dispatch(add_item(item))
                ToastAndroid.show("Item added to cart!",ToastAndroid.CENTER)
              }}
              naviagtion={navigation}
            />
          }

          ListHeaderComponent={() => <>
            <HeroSection
              navigation={navigation}
            />
            <Banner />
            <Text style={styles.heading}>Recommended</Text>
          </>}
          ListEmptyComponent={() => loading?<Loader/>:<Empty />}
          ListFooterComponent={()=><View style={{marginBottom:heightPercentageToDP(10)}}></View>}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  main_screen: {
    flex: 1,
    backgroundColor: Colors.White
  },
  list_section: {
    flex: 1,
  },
  heading: {
    color: Colors.Black,
    fontSize: 30,
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    lineHeight: 38,
    marginHorizontal: widthPercentageToDP(6),
    marginBottom: heightPercentageToDP(2)
  }
})
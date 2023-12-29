import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Header from '../../reusables/Header'
import { useSelector, useDispatch } from 'react-redux'
import ItemCard from '../../reusables/ItemCard'
import Empty from '../../reusables/Empty'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { Fonts } from '../../../assets/fonts'
import { add_item } from '../../slices/CartSlice'
const Favourites = ({navigation}) => {

    const dispatch=useDispatch()

    const favourites=useSelector(state=>state?.favourites?.items)

  return (
    <View style={styles?.main_screen}>
    <Header
    navigation={navigation}
    />
         <FlatList
          data={favourites}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item, index }) => <ItemCard
              item={item}
              favou={true}
              key={index}
              onPressCart={(item)=>dispatch(add_item(item))}
              naviagtion={navigation}
            />
          }
          ListHeaderComponent={()=><Text style={styles.heading}>My Favourites</Text>}
          ListEmptyComponent={() => <Empty />}
          ListFooterComponent={()=><View style={{marginBottom:heightPercentageToDP(10)}}></View>}
        />
    </View>
  )
}

export default Favourites

const styles = StyleSheet.create({
    main_screen: {
        flex: 1,
        backgroundColor:Colors?.White
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
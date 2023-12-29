import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon, { Icons } from '../../assets/Icons/Icons'
import { Colors } from '../constants/Colors'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import LottieView from 'lottie-react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { add_to_favourite, remove_from_favourite } from '../slices/FavouriteSlice'
const MakeFav = ({favou=false,item,style,iconStyle}) => {

    const [fav,setFav]=useState(favou)

    const dispatch=useDispatch()

    const favourites=useSelector(state=>state?.favourites?.items)

    useEffect(()=>{
        let found=false;
        for(let i=0;i<favourites.length;i++){
            if (favourites[i]?.id === item?.id){
                setFav(true)
                found=true;
                break;
            }

        }
        if(!found)setFav(false) 
    },[item,favourites])


  return (
    <TouchableOpacity
    onPress={()=>{
        setFav(prev=>!prev)
        if(fav) dispatch(remove_from_favourite(item?.id))
        else dispatch(add_to_favourite(item))
    }}
    style={style}>
                {!fav?<Icon name={"heart-o"} type={Icons?.FontAwesome} size={20} color={Colors?.Black}/>:
                <LottieView
                source={require('../../assets/Animations/like.json')}
                autoPlay
                style={iconStyle}
                />
                }
            </TouchableOpacity>
  )
}

export default MakeFav

const styles = StyleSheet.create({})
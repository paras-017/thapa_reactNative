import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({name,vegNonVeg,origin,bestTimeToEat}) => {
  return (
    <View style={[styles.mainContainer,styles.bg]}>
      <Text>{name}</Text>
      <Text>{vegNonVeg}</Text>
      <Text>{origin}</Text>
      <Text>{bestTimeToEat}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    mainContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:5,
        width:120,
        borderRadius:5,
        padding:1,
        gap:5
    },
    bg:{
        backgroundColor:'teal'
    }
})
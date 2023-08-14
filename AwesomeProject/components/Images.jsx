import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Images = () => {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.textStyle}>This is Image component</Text>
      <Image style={styles.imageDimension} source={require('../assets/cat.jpg')}/>
      <Image
        style={styles.imageDimension}
        source={{ uri: 'https://m.media-amazon.com/images/I/61TapeOXotL._SL1500_.jpg' }}
      />
    </View>
  )
}

export default Images

const styles = StyleSheet.create({
    listStyle:{
        
        backgroundColor:'#42f5c8',
        direction:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:18,
        color:'black'
    },
    imageDimension:{
        height:100,
        width:100
    }
})
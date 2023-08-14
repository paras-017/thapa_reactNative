import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Buttons = () => {
  return (
    <View>
      <Text>Buttons</Text>
      <Button title='JOIN NOW' onPress={()=>Alert.alert('Do You want install this app')} />
      <TouchableOpacity onPress={()=>console.log('Hello TouchableOpacity')}>
        <Text style={styles.myButton}>Login</Text>
        <Image source={{uri:'https://m.media-amazon.com/images/I/61TapeOXotL._SL1500_.jpg'}} height={80} width={89}/>
      </TouchableOpacity>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    myButton:{
        backgroundColor:'black',
        color:'white',
        padding:10,
        margin:1,
        textAlign:'center',
        fontSize:20,
        

    }
})
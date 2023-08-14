import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Flatlist from './components/Flatlist'
import Images from './components/Images'
import Buttons from './components/Buttons'

const App = () => {
  const name ='paras'
  return (
    <View style={styles.container}>
      <Text style={styles.blue}>Welcome to Paras Food4Paws</Text>
      <Text style={[styles.blue,styles.bold]}>WE provide free cat food</Text>
      <Text style={styles.textSmRed}>Welcome to {name} Food4Paws</Text>
      <Flatlist/>
      <Images/>
      <Buttons/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
    
  },
  blue:{
    color:'blue',
    fontSize:40,

  },
  textSmRed:{
    fontSize:30,
    color:'red'
  },
  bold:{
    fontWeight:'700'
  }
})
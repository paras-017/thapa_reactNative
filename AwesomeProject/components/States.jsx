import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const States = () => {
  const [quantity, SetQuantity] = useState(0)
  const Increase = ()=>{
    SetQuantity(quantity+10)
  }
  const decrease = ()=>{
    !quantity==0?SetQuantity(quantity-10):SetQuantity(0)
  }
  return (
    <View>
      <Button title='-10' onPress={decrease}/>
      <Text style={styles.textBig}>{quantity}</Text>
      <Button title='+10' onPress={()=>Increase()}/>
    </View>
  )
}


export default States

const styles = StyleSheet.create({
  textBig:{
    fontSize:30,
    textAlign:'center'
  }
})
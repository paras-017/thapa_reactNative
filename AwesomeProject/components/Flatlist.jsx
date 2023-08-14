import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card';

const Flatlist = () => {
  const foodArray = [
    {
      name: "Pizza",
      vegNonVeg: "Non-veg",
      origin: "Italy",
      bestTimeToEat: "Lunch or Dinner",
    },
    {
      name: "Sushi",
      vegNonVeg: "Non-veg",
      origin: "Japan",
      bestTimeToEat: "Lunch or Dinner",
    },
    {
      name: "Burger",
      vegNonVeg: "Non-veg",
      origin: "USA",
      bestTimeToEat: "Anytime",
    },
    {
      name: "Dal Makhani",
      vegNonVeg: "Veg",
      origin: "India",
      bestTimeToEat: "Lunch or Dinner",
    },
    {
      name: "Taco",
      vegNonVeg: "Non-veg",
      origin: "Mexico",
      bestTimeToEat: "Lunch or Dinner",
    },
    {
      name: "Samosa",
      vegNonVeg: "Veg",
      origin: "India",
      bestTimeToEat: "Snack Time",
    },
  ];
  
  return (
    <ScrollView >
      <FlatList data={foodArray}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>{
        return <Card key={item.name} {...item}/>
      }}/>
    </ScrollView>
  )
}

export default Flatlist

const styles = StyleSheet.create({
   bgcyan:{
    backgroundColor:'violet',
    margin:10,
    padding:10,
    borderRadius:14
   },
   container: {
    paddingVertical: 10,
  },
})
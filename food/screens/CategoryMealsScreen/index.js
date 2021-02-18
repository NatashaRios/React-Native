import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CategoriesMealsScreen({ navigation }){
  return(
    <View style={styles.screen}>
      <Text>The Category Meals Screen!</Text>
      <Button title='Go to Details' onPress={() => {
          navigation.navigate({ routeName: 'MealDetails' })
        }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
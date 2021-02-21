import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

export default function CategoryGridTile({ onSelect, title, color }){
  let TouchableComponent = TouchableOpacity;

  if(Platform.OS == 'android' && Platform.Version >= 21){
    TouchableComponent = TouchableNativeFeedback;
  };

  return(
    <View style={styles.gridItem}>
      <TouchableComponent 
        style={{ flex: 1} }
        onPress={onSelect}>
        <View style={{...styles.container,...{backgroundColor: color}}}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 3,
    overflow: Platform.OS == 'android' && Platform.Version >= 21 ? 'hidden' : 'visibile',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
});
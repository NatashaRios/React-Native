import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../../components/BodyText';
import TitleText from '../../components/TitleText';

export default function GameOverScreen({ roundsNumber, userNumber, onRestart }){
  return(
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image 
          /* source={require('../../assets/success.png')}  */
          source={{uri: 'https://cdn.britannica.com/73/189273-131-DA3E2F9A/Denali-peak-center-Alaska-Range-North-America.jpg'}}
          style={styles.image} 
          resizeMode='cover'
          />
      </View>
      <BodyText>Number of rounds: {roundsNumber}</BodyText>
      <BodyText>Number was: {userNumber}</BodyText>
      <Button title='NEW GAME' onPress={onRestart}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
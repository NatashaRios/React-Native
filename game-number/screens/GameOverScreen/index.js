import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Colors from '../../constants/colors';
import BodyText from '../../components/BodyText';
import TitleText from '../../components/TitleText';
import MainButton from '../../components/MainButton';

export default function GameOverScreen({ roundsNumber, userNumber, onRestart }){
  return(
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/success.png')} 
          /* source={{uri: 'https://cdn.britannica.com/73/189273-131-DA3E2F9A/Denali-peak-center-Alaska-Range-North-America.jpg'}} */
          style={styles.image} 
          resizeMode='cover'
          />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}> {roundsNumber} </Text> rounds to guess the number <Text  style={styles.highlight}> {userNumber} </Text></BodyText>
      </View>
      <MainButton onPress={onRestart}>
        NEW GAME
      </MainButton>
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
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 20
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});
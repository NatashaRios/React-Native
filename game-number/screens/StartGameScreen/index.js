import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../../components/Card'
import Input from '../../components/Input';
import NumberContainer from '../../components/NumberContainer';
import BodyText from '../../components/BodyText';
import TitleText from '../../components/TitleText';
import MainButton from '../../components/MainButton';
import Colors from '../../constants/colors';

export default function StartGameScreen({ onStartGame }){
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, '')); 
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirInputHandler = () => {
        const chooseNumber = parseInt(enteredValue);
        if(isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99){
            Alert.alert('Invalid number!', 'Number has to be a number betweent 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if(confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>Your Selected</Text>
               <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={() => onStartGame(selectedNumber)}>
                START GAME
            </MainButton>
            </Card>
        );
    };

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game!</TitleText>
            
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType='number-pad' 
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}> 
                            <Button title='Reset' color={Colors.accent} onPress={resetInputHandler}/>
                        </View>
                        <View style={styles.button}> 
                            <Button title='Confirm' color={Colors.primary} onPress={confirInputHandler}/>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    summaryContainer: {
      marginTop: 20,
      alignItems: 'center' 
    }
})
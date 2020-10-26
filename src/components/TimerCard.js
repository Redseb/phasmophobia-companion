import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import Button from './Button';

const {width, height} = Dimensions.get('screen');

const TimerCard = () => {
  const [timeRemaining, setTimeRemaining] = useState(5 * 60);
  const [timerId, setTimerId] = useState('timer');
  const [isPaused, setIsPaused] = useState(true);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/oldPaper.jpg')}
        style={styles.imgBG}
      />
      <Text style={styles.name}>Timer</Text>

      <CountDown
        id={timerId}
        until={timeRemaining}
        size={height / 20}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
        digitStyle={{backgroundColor: 'rgba(0, 0, 0, 0)', margin: 0}}
        digitTxtStyle={styles.timerText}
        separatorStyle={styles.timerText}
        showSeparator
        onPress={() => {
          setTimeRemaining(timeRemaining == 5 * 60 ? 2 * 60 : 5 * 60);
          setTimerId(timerId == 'timer1' ? 'timer2' : 'timer1');
        }}
        onFinish={() => {
          alert('The timer has finished, the ghost may start haunting');
        }}
        running={!isPaused}
      />
      <Text
        style={{
          ...styles.commonText,
          fontStyle: 'italic',
          fontSize: height / 50,
        }}>
        Tap the timer to reset and toggle the time remaining
      </Text>
      <TouchableOpacity
        onPress={() => {
          setIsPaused(!isPaused);
        }}
        style={styles.buttonWrapper}>
        <Text style={{...styles.commonText, fontWeight: 'bold'}}>
          {isPaused ? 'Start' : 'Pause'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.commonText}>
        Each investigation difficulty has a different amount of time before the
        ghost can start hunting:
      </Text>
      <View>
        <Text style={styles.commonText}>Amateur - 5:00</Text>
        <Text style={styles.commonText}>Intermediate - 2:00</Text>
        <Text style={styles.commonText}>Professional - 0:00</Text>
      </View>
      <Text style={{...styles.commonText, fontWeight: 'bold'}}>
        Reset the timer when you leave the van!
      </Text>
    </View>
  );
};

const BORDERWIDTH = height / 200;

const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: height / 1.25,
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#DCD289',
    padding: width / 20,
    borderRadius: 10,
    borderWidth: height / 200,
    borderColor: '#312F34',
  },
  imgBG: {
    ...StyleSheet.absoluteFillObject,
    height: height / 1.25 - BORDERWIDTH * 2,
    width: width / 1.2 - BORDERWIDTH * 2,
    borderRadius: 10,
    opacity: 0.5,
  },
  name: {
    fontSize: height / 20,
    fontFamily: 'ShadowsIntoLight',
  },
  commonText: {
    fontSize: height / 40,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
  },
  timerText: {
    fontFamily: 'ShadowsIntoLight',
    fontWeight: 'normal',
    color: 'black',
  },
  buttonWrapper: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    width: height / 10,
  },
});

export default TimerCard;

import React, {useState, useEffect} from 'react';

import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
import Picker from '../components/Picker';
const SettingsCard = ({name, desc}) => {
  //Evidence state
  const [e1, setE1] = useState(0);
  const [e2, setE2] = useState(0);
  const [e3, setE3] = useState(0);
  const [ghost, setGhost] = useState(0);

  //Whenever any evidence is updated, reset ghost
  useEffect(() => {
    setGhost(0);
  }, [e1, e2, e3]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/oldPaper.jpg')}
        style={styles.imgBG}
      />
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
});

export default SettingsCard;

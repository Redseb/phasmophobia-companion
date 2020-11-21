import React, {useState, useEffect} from 'react';

import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {storeData, getData, LANGUAGE_KEY} from '../util/dataStorage';
import {labelSwitch, LANGUAGES} from '../util/translationSwitch';
const {width, height} = Dimensions.get('screen');
import Picker from '../components/Picker';
const SettingsCard = ({
  language,
  setLanguage,
  languageIndex,
  setLanguageIndex,
}) => {
  const labels = labelSwitch(language);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/oldPaper.jpg')}
        style={styles.imgBG}
      />
      <Text style={styles.name}>{labels.settings}</Text>
      <View>
        <Text style={styles.commonText}>Language</Text>
        <Picker
          type="language"
          evidence={languageIndex}
          setEvidence={setLanguageIndex}
          setLanguage={setLanguage}
        />
      </View>
      <Text style={styles.commonText}>{labels.review}</Text>
      <Text style={styles.smallText}>
        Translation Credit: Mikołaj Zyzański, StrongPlog, Narva, Delmas-Mons
        Bastien
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
    justifyContent: 'space-evenly',
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
  smallText: {
    fontSize: height / 60,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    alignSelf: 'flex-end',
  },
});

export default SettingsCard;

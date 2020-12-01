import React, {useEffect} from 'react';

import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {labelSwitch} from '../util/translationSwitch';

const {width, height} = Dimensions.get('window');
console.log(height);

const GhostCard = ({name, desc, strength, weakness, evidence, language}) => {
  evidence = evidence.split(/, /);
  let labels = labelSwitch(language);
  let translatedEvidence = [];
  evidence.forEach((evidence) => {
    switch (evidence) {
      case 'EMF Level 5':
        translatedEvidence.push(labels.emf5);
        break;
      case 'Spirit Box':
        translatedEvidence.push(labels.spiritBox);
        break;
      case 'Fingerprints':
        translatedEvidence.push(labels.fingerprints);
        break;
      case 'Ghost Orb':
        translatedEvidence.push(labels.ghostOrb);
        break;
      case 'Ghost Writing':
        translatedEvidence.push(labels.ghostWriting);
        break;
      case 'Freezing Temperatures':
        translatedEvidence.push(labels.freezingTemp);
        break;
    }
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/oldPaper.jpg')}
        style={styles.imgBG}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.commonText}>{desc}</Text>
      <Text style={styles.commonText}>
        <Text style={styles.strengthHeader}>
          {labelSwitch(language).uniqueStrengths}
        </Text>
        {strength}
      </Text>
      <Text style={styles.commonText}>
        <Text style={styles.weaknessHeader}>
          {labelSwitch(language).uniqueWeaknesses}
        </Text>
        {weakness}
      </Text>
      <Text style={styles.commonText}>
        <Text style={styles.EvidenceHeader}>
          {labelSwitch(language).evidence}:{' '}
        </Text>
        {translatedEvidence.join(', ')}
      </Text>
    </View>
  );
};

const BORDERWIDTH = height / 200;

const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: height / 1.15,
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
    height: height / 1.15 - BORDERWIDTH * 2,
    width: width / 1.2 - BORDERWIDTH * 2,
    borderRadius: 10,
    opacity: 0.5,
  },
  name: {
    fontSize: height / 20,
    fontFamily: 'ShadowsIntoLight',
  },
  commonText: {
    // fontSize: height / 55,
    // fontSize: 16,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
  },
  strengthHeader: {
    fontWeight: 'bold',
    color: '#B00303',
  },
  weaknessHeader: {
    fontWeight: 'bold',
    color: '#000E8C',
  },
  EvidenceHeader: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default GhostCard;

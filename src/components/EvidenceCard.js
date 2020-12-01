import React, {useState, useEffect} from 'react';

import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {labelSwitch} from '../util/translationSwitch';

const {width, height} = Dimensions.get('window');
import Picker from '../components/Picker';
import Button from '../components/Button';
const EvidenceCard = ({name, desc, language}) => {
  //Evidence state
  const [e1, setE1] = useState(0);
  const [e2, setE2] = useState(0);
  const [e3, setE3] = useState(0);
  const [ghost, setGhost] = useState(0);

  //Whenever any evidence is updated, reset ghost
  useEffect(() => {
    setGhost(0);
  }, [e1, e2, e3]);
  const labels = labelSwitch(language);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/oldPaper.jpg')}
        style={styles.imgBG}
      />

      <Text style={styles.commonText}>{labels.evidence} #1</Text>
      <Picker
        type="evidence"
        evidence={e1}
        setEvidence={setE1}
        setGhost={setGhost}
        language={language}
      />
      <Text style={styles.commonText}>{labels.evidence} #2</Text>
      <Picker
        type="evidence"
        evidence={e2}
        setEvidence={setE2}
        setGhost={setGhost}
        language={language}
      />
      <Text style={styles.commonText}>{labels.evidence} #3</Text>
      <Picker
        type="evidence"
        evidence={e3}
        setEvidence={setE3}
        setGhost={setGhost}
        language={language}
      />
      <Text style={styles.commonText}>{labels.evidenceAbove}</Text>
      <Picker
        type="ghost"
        evidenceArr={[e1, e2, e3]}
        evidence={ghost}
        setEvidence={setGhost}
        language={language}
      />
      <Button
        text={labels.reset}
        onPress={() => {
          setE1(0);
          setE2(0);
          setE3(0);
          setGhost(0);
        }}
      />
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
    // fontSize: height / 40,
    fontSize: 20,

    textAlign: 'center',
    fontFamily: 'Ubuntu',
  },
});

export default EvidenceCard;

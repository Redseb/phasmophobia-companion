import React, {useState, useEffect} from 'react';

import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
import Picker from '../components/Picker';
import Button from '../components/Button';
const EvidenceCard = ({name, desc}) => {
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

      <Text style={styles.commonText}>Evidence #1</Text>
      <Picker
        type="evidence"
        evidence={e1}
        setEvidence={setE1}
        setGhost={setGhost}
      />
      <Text style={styles.commonText}>Evidence #2</Text>
      <Picker
        type="evidence"
        evidence={e2}
        setEvidence={setE2}
        setGhost={setGhost}
      />
      <Text style={styles.commonText}>Evidence #3</Text>
      <Picker
        type="evidence"
        evidence={e3}
        setEvidence={setE3}
        setGhost={setGhost}
      />
      <Text style={styles.commonText}>
        Using the evidence above, I have discovered that the Ghost type is:{' '}
      </Text>
      <Picker
        type="ghost"
        evidenceArr={[e1, e2, e3]}
        evidence={ghost}
        setEvidence={setGhost}
      />
      <Button
        text="Reset"
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

export default EvidenceCard;

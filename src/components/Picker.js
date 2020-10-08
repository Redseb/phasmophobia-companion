import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('screen');

const evidenceList = [
  'No Evidence',
  'Spirit Box',
  'Freezing Temperatures',
  'EMF Level 5',
  'Ghost Writing',
  'Ghost Orb',
  'Fingerprints',
];

const ghostList = [
  'Spirit',
  'Wraith',
  'Phantom',
  'Poltergeist',
  'Banshee',
  'Jinn',
  'Mare',
  'Revenant',
  'Shade',
  'Demon',
  'Yurei',
  'Oni',
];

const Picker = ({type, evidence, setEvidence}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{width: width / 8, alignItems: 'flex-start'}}
        onPress={() => {
          setEvidence((evidence - 1) % evidenceList.length);
        }}>
        <FontAwesome5 name="angle-left" size={width / 10} />
      </TouchableOpacity>
      <Text style={styles.text}>{evidenceList[evidence]}</Text>
      <TouchableOpacity style={{width: width / 8, alignItems: 'flex-end'}}>
        <FontAwesome5
          name="angle-right"
          size={width / 10}
          onPress={() => {
            setEvidence((evidence + 1) % evidenceList.length);
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 6,
    width: width / 1.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: height / 40,
    width: width / 3,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
  },
});

export default Picker;

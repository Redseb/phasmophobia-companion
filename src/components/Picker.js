import React, {useEffect} from 'react';
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
  'No Evidence', //0
  'EMF Level 5',
  'Spirit Box',
  'Fingerprints',
  'Ghost Orb',
  'Ghost Writing',
  'Freezing Temperatures',
];

const ghostNames = [
  'Not Yet Discoverd',
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
let ghostPickerList = ghostNames;
// Ghost: name: <String>, evidence:[integer, integer, integer]
// evidence number is the index in evidenceList
const ghostList = [
  {
    name: 'Not Yet Discoverd',
    evidence: [0, 0, 0],
  },
  {
    name: 'Spirit',
    evidence: [1, 6, 4],
  },
  {
    name: 'Wraith',
    evidence: [6, 2, 1],
  },
  {
    name: 'Phantom',
    evidence: [3, 5, 2],
  },
  {
    name: 'Poltergeist',
    evidence: [1, 6, 5],
  },
  {
    name: 'Banshee',
    evidence: [3, 6, 2],
  },
  {
    name: 'Jinn',
    evidence: [1, 5, 3],
  },
  {
    name: 'Mare',
    evidence: [1, 5, 2],
  },
  {
    name: 'Revenant',
    evidence: [3, 6, 4],
  },
  {
    name: 'Shade',
    evidence: [3, 5, 4],
  },
  {
    name: 'Demon',
    evidence: [1, 4, 2],
  },
  {
    name: 'Yurei',
    evidence: [5, 4, 2],
  },
  {
    name: 'Oni',
    evidence: [3, 1, 4],
  },
];

//evidence and setEvidence are ghost and setGhost for type="ghost"
const Picker = ({type, evidence, setEvidence, evidenceArr}) => {
  if (type == 'evidence') {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{width: width / 8, alignItems: 'flex-start'}}
          onPress={() => {
            setEvidence(evidence == 0 ? evidenceList.length - 1 : evidence - 1);
          }}>
          <FontAwesome5 name="angle-left" size={width / 8} />
        </TouchableOpacity>
        <Text style={styles.text}>{evidenceList[evidence]}</Text>
        <TouchableOpacity style={{width: width / 8, alignItems: 'flex-end'}}>
          <FontAwesome5
            name="angle-right"
            size={width / 8}
            onPress={() => {
              setEvidence((evidence + 1) % evidenceList.length);
            }}
          />
        </TouchableOpacity>
      </View>
    );
  } else {
    //Filter out the ghost list
    ghostPickerList = ghostNames.filter((ghostName, index) => {
      let passes = true;
      evidenceArr.forEach((e) => {
        if (e > 0 && !ghostList[index].evidence.includes(e) && index > 0) {
          passes = false;
        }
      });
      return passes;
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{width: width / 8, alignItems: 'flex-start'}}
          onPress={() => {
            setEvidence(
              evidence == 0 ? ghostPickerList.length - 1 : evidence - 1,
            );
          }}>
          <FontAwesome5 name="angle-left" size={width / 8} />
        </TouchableOpacity>
        <Text style={styles.text}>{ghostPickerList[evidence]}</Text>
        <TouchableOpacity style={{width: width / 8, alignItems: 'flex-end'}}>
          <FontAwesome5
            name="angle-right"
            size={width / 8}
            onPress={() => {
              setEvidence((evidence + 1) % ghostPickerList.length);
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
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

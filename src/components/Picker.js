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
  'EMF Level 5', //1
  'Spirit Box', //2
  'Fingerprints', //3
  'Ghost Orb', //4
  'Ghost Writing', //5
  'Freezing Temperatures', //6
];

// Ghost: name: <String>, evidence:[integer, integer, integer]
// evidence number is the index in evidenceList
const ghostList = [
  {
    name: 'Not Yet Discovered',
    evidence: [0, 0, 0],
  },
  {
    name: 'Spirit',
    evidence: [2, 3, 5],
  },
  {
    name: 'Wraith',
    evidence: [3, 6, 2],
  },
  {
    name: 'Phantom',
    evidence: [1, 4, 6],
  },
  {
    name: 'Poltergeist',
    evidence: [2, 3, 4],
  },
  {
    name: 'Banshee',
    evidence: [1, 3, 6],
  },
  {
    name: 'Jinn',
    evidence: [2, 4, 1],
  },
  {
    name: 'Mare',
    evidence: [2, 4, 6],
  },
  {
    name: 'Revenant',
    evidence: [1, 3, 5],
  },
  {
    name: 'Shade',
    evidence: [1, 4, 5],
  },
  {
    name: 'Demon',
    evidence: [2, 5, 6],
  },
  {
    name: 'Yurei',
    evidence: [4, 5, 6],
  },
  {
    name: 'Oni',
    evidence: [1, 2, 5],
  },
];

//evidence and setEvidence are ghost and setGhost for type="ghost"
const Picker = ({type, evidence, setEvidence, evidenceArr, setGhost}) => {
  if (type == 'evidence') {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{width: width / 8, alignItems: 'flex-start'}}
          onPress={() => {
            setGhost(0);
            setEvidence(evidence == 0 ? evidenceList.length - 1 : evidence - 1);
          }}>
          <FontAwesome5 name="angle-left" size={width / 8} />
        </TouchableOpacity>
        <Text style={styles.pickerText}>{evidenceList[evidence]}</Text>
        <TouchableOpacity style={{width: width / 8, alignItems: 'flex-end'}}>
          <FontAwesome5
            name="angle-right"
            size={width / 8}
            onPress={() => {
              setGhost(0);
              setEvidence((evidence + 1) % evidenceList.length);
            }}
          />
        </TouchableOpacity>
      </View>
    );
  } else {
    //Filter out the ghost list
    const ghostPickerList = ghostList.filter((ghost, index) => {
      let passes = true;
      evidenceArr.forEach((e) => {
        if (e > 0 && !ghost.evidence.includes(e) && index > 0) {
          passes = false;
        }
      });
      return passes;
    });
    let possibleEvidence = [];
    ghostPickerList.forEach((ghost) => {
      possibleEvidence.push(
        ghost.evidence[0],
        ghost.evidence[1],
        ghost.evidence[2],
      );
    });
    possibleEvidence = Array.from(new Set(possibleEvidence));
    possibleEvidence = possibleEvidence.filter((evidence) => {
      if (evidenceArr.includes(evidence) || evidence == 0) {
        return false;
      }
      return true;
    });
    possibleEvidence.sort();
    const possibleEvidenceText = possibleEvidence.map(
      (evidence) => evidenceList[evidence] + ', ',
    );

    return (
      <>
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
          <Text style={styles.pickerText}>
            {ghostPickerList[evidence].name == undefined
              ? ghostPickerList[0].name
              : ghostPickerList[evidence].name}
          </Text>
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
        <View style={styles.evidenceRemainingContainer}>
          <Text style={styles.header}>Possible Evidence Remaining:</Text>
          <Text style={styles.text}>
            {possibleEvidence.length >= 6
              ? 'All'
              : possibleEvidence.length == 0
              ? 'None'
              : possibleEvidenceText}
          </Text>
        </View>
      </>
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
  pickerText: {
    alignSelf: 'center',
    fontSize: height / 40,
    width: width / 3,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
  },
  evidenceRemainingContainer: {
    height: height / 5,
    display: 'flex',
    justifyContent: 'space-around',
  },
  header: {
    alignSelf: 'center',
    fontSize: height / 40,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
  },
  text: {
    alignSelf: 'center',
    fontSize: height / 50,
    textAlign: 'center',
    fontFamily: 'Ubuntu',
  },
});

export default Picker;

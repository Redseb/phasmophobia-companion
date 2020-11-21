import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {storeData, getData, LANGUAGE_KEY} from '../util/dataStorage';
import {LANGUAGES, labelSwitch} from '../util/translationSwitch';
const {width, height} = Dimensions.get('screen');

// const LANGUAGES = {en: {name: 'English', key: 'en'}, ru: {name: 'Russian', key: 'ru'}};

//evidence and setEvidence are ghost and setGhost for type="ghost"
const Picker = ({
  type,
  evidence,
  setEvidence,
  evidenceArr,
  setGhost,
  setLanguage,
  language,
}) => {
  let labels = labelSwitch(language);
  const evidenceList = [
    labels.noEvidence, //0
    labels.emf5, //1
    labels.spiritBox, //2
    labels.fingerprints, //3
    labels.ghostOrb, //4
    labels.ghostWriting, //5
    labels.freezingTemp, //6
  ];

  // Ghost: name: <String>, evidence:[integer, integer, integer]
  // evidence number is the index in evidenceList
  const ghostList = [
    {
      name: labels.notYedDiscovered,
      evidence: [0, 0, 0],
    },
    {
      name: labels.spirit,
      evidence: [2, 3, 5],
    },
    {
      name: labels.wraith,
      evidence: [3, 6, 2],
    },
    {
      name: labels.phantom,
      evidence: [1, 4, 6],
    },
    {
      name: labels.poltergeist,
      evidence: [2, 3, 4],
    },
    {
      name: labels.banshee,
      evidence: [1, 3, 6],
    },
    {
      name: labels.jinn,
      evidence: [2, 4, 1],
    },
    {
      name: labels.mare,
      evidence: [2, 4, 6],
    },
    {
      name: labels.revenant,
      evidence: [1, 3, 5],
    },
    {
      name: labels.shade,
      evidence: [1, 4, 5],
    },
    {
      name: labels.demon,
      evidence: [2, 5, 6],
    },
    {
      name: labels.yurei,
      evidence: [4, 5, 6],
    },
    {
      name: labels.oni,
      evidence: [1, 2, 5],
    },
  ];

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
  } else if (type == 'ghost') {
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
          <Text style={styles.header}>{labels.evidenceRemaining}:</Text>
          <Text style={styles.text}>
            {possibleEvidence.length >= 6
              ? labels.all
              : possibleEvidence.length == 0
              ? labels.none
              : possibleEvidenceText}
          </Text>
        </View>
      </>
    );
  } else if (type == 'language') {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{width: width / 8, alignItems: 'flex-start'}}
          onPress={() => {
            const newIndex =
              evidence == 0 ? LANGUAGES.length - 1 : evidence - 1;
            setEvidence(newIndex);
            setLanguage(LANGUAGES[newIndex].key);
            storeData(LANGUAGE_KEY, LANGUAGES[newIndex].key);
          }}>
          <FontAwesome5 name="angle-left" size={width / 8} />
        </TouchableOpacity>
        <Text style={styles.pickerText}>{LANGUAGES[evidence].name}</Text>
        <TouchableOpacity style={{width: width / 8, alignItems: 'flex-end'}}>
          <FontAwesome5
            name="angle-right"
            size={width / 8}
            onPress={() => {
              const newIndex = (evidence + 1) % LANGUAGES.length;
              setEvidence(newIndex);
              setLanguage(LANGUAGES[newIndex].key);
              storeData(LANGUAGE_KEY, LANGUAGES[newIndex].key);
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height: height / 15,
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
    height: height / 7,
    display: 'flex',
    justifyContent: 'flex-start',
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

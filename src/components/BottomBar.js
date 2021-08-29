import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { snapToItem } from 'react-native-snap-carousel';
import { labelSwitch } from '../util/translationSwitch';
const { width, height } = Dimensions.get('window');

const INTRO_INDEX = 1;
const GHOST_INDEX = 5;
const TOOLS_INDEX = 21;
const EVIDENCE_INDEX = 30;

const BottomBar = ({ carouselRef, activeIndex, language }) => {
  const labels = labelSwitch(language);
  const [currSection, setCurrSection] = useState(0);
  useEffect(() => {
    if (
      carouselRef.current.currentIndex >= 0 &&
      carouselRef.current.currentIndex < GHOST_INDEX
    ) {
      setCurrSection(1);
    } else if (
      carouselRef.current.currentIndex < TOOLS_INDEX &&
      carouselRef.current.currentIndex >= GHOST_INDEX
    ) {
      setCurrSection(2);
    } else if (
      carouselRef.current.currentIndex < EVIDENCE_INDEX &&
      carouselRef.current.currentIndex >= TOOLS_INDEX
    ) {
      setCurrSection(3);
    } else {
      setCurrSection(4);
    }
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setCurrSection(1);
          carouselRef.current.snapToItem(INTRO_INDEX);
        }}>
        <FontAwesome5
          name="info-circle"
          style={{
            ...styles.icon,
            color: currSection == 1 ? '#DCD289' : 'white',
          }}
          size={width / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color: currSection == 1 ? '#DCD289' : 'white',
          }}>
          {labels.introduction}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setCurrSection(2);
          carouselRef.current.snapToItem(GHOST_INDEX);
        }}>
        <FontAwesome5
          name="ghost"
          style={{
            ...styles.icon,
            color: currSection == 2 ? '#DCD289' : 'white',
          }}
          size={width / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color: currSection == 2 ? '#DCD289' : 'white',
          }}>
          {labels.ghosts}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setCurrSection(3);
          carouselRef.current.snapToItem(TOOLS_INDEX);
        }}>
        <FontAwesome5
          name="tools"
          style={{
            ...styles.icon,
            color: currSection == 3 ? '#DCD289' : 'white',
          }}
          size={width / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color: currSection == 3 ? '#DCD289' : 'white',
          }}>
          {labels.tools}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setCurrSection(4);
          carouselRef.current.snapToItem(EVIDENCE_INDEX);
        }}>
        <FontAwesome5
          name="angle-double-right"
          style={{
            ...styles.icon,
            color: currSection == 4 ? '#DCD289' : 'white',
          }}
          size={width / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color: currSection == 4 ? '#DCD289' : 'white',
          }}>
          {labels.evidence}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 16,
    backgroundColor: '#312F34',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
  iconFooter: {
    fontFamily: 'Ubuntu',
    color: 'white',
  },
});

export default BottomBar;

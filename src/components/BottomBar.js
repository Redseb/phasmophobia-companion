import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {snapToItem} from 'react-native-snap-carousel';
const {width, height} = Dimensions.get('screen');

const INTRO_INDEX = 0;
const GHOST_INDEX = 3;
const TOOLS_INDEX = 15;
const EVIDENCE_INDEX = 23;

const BottomBar = ({carouselRef}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          carouselRef.current.snapToItem(INTRO_INDEX);
        }}>
        <FontAwesome5
          name="info-circle"
          style={{
            ...styles.icon,
            color:
              carouselRef.current.currentIndex >= INTRO_INDEX &&
              carouselRef.current.currentIndex < GHOST_INDEX
                ? '#DCD289'
                : 'white',
          }}
          size={width / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color:
              carouselRef.current.currentIndex >= INTRO_INDEX &&
              carouselRef.current.currentIndex < GHOST_INDEX
                ? '#DCD289'
                : 'white',
          }}>
          Introduction
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          carouselRef.current.snapToItem(GHOST_INDEX);
        }}>
        <FontAwesome5
          name="ghost"
          style={{
            ...styles.icon,
            color:
              carouselRef.current.currentIndex < TOOLS_INDEX &&
              carouselRef.current.currentIndex >= GHOST_INDEX
                ? '#DCD289'
                : 'white',
          }}
          size={width / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color:
              carouselRef.current.currentIndex < TOOLS_INDEX &&
              carouselRef.current.currentIndex >= GHOST_INDEX
                ? '#DCD289'
                : 'white',
          }}>
          Ghosts
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          carouselRef.current.snapToItem(TOOLS_INDEX);
        }}>
        <FontAwesome5
          name="tools"
          style={{
            ...styles.icon,
            color:
              carouselRef.current.currentIndex < EVIDENCE_INDEX &&
              carouselRef.current.currentIndex >= TOOLS_INDEX
                ? '#DCD289'
                : 'white',
          }}
          size={width / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color:
              carouselRef.current.currentIndex < EVIDENCE_INDEX &&
              carouselRef.current.currentIndex >= TOOLS_INDEX
                ? '#DCD289'
                : 'white',
          }}>
          Tools
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          carouselRef.current.snapToItem(EVIDENCE_INDEX);
        }}>
        <FontAwesome5
          name="angle-double-right"
          style={{
            ...styles.icon,
            color:
              carouselRef.current.currentIndex == EVIDENCE_INDEX
                ? '#DCD289'
                : 'white',
          }}
          size={width / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color:
              carouselRef.current.currentIndex == EVIDENCE_INDEX
                ? '#DCD289'
                : 'white',
          }}>
          Evidence
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

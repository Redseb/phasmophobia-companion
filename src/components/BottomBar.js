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

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5
          name="info-circle"
          style={styles.icon}
          size={width / 20}
        />
        <Text style={styles.iconFooter}>Introduction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="ghost" style={styles.icon} size={width / 20} />
        <Text style={styles.iconFooter}>Ghosts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5 name="tools" style={styles.icon} size={width / 20} />
        <Text style={styles.iconFooter}>Tools</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome5
          name="angle-double-right"
          style={styles.icon}
          size={width / 20}
        />
        <Text style={styles.iconFooter}>Evidence</Text>
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

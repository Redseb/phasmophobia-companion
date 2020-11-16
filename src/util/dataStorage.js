const LANGUAGE_KEY = '@language';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LANGUAGES} from './translationSwitch';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
    console.log('Error storing data');
  }
};

const getData = async (key, setter, setter2) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      // console.log(value);
      if (setter !== null || setter !== undefined) {
        setter(value);
      }
      if (setter2 !== null || setter2 !== undefined) {
        setter2(
          LANGUAGES.map(function (lan) {
            return lan.key;
          }).indexOf(value),
        );
      }
    } else {
      storeData(LANGUAGE_KEY, 'en');
    }
  } catch (e) {
    // error reading value
    console.log('Error retrieving data');
  }
};

export {storeData, getData, LANGUAGE_KEY};

const LANGUAGE_KEY = "@language";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
        console.log("Error storing data");
    }
}


const getData = async (key, setter) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            // value previously stored
            // console.log(value);
            if (setter !== null) {
                setter(value)
            }
        } else {
            storeData(LANGUAGE_KEY, "en");
        }
    } catch (e) {
        // error reading value
        console.log("Error retrieving data");
    }
}

export { storeData, getData, LANGUAGE_KEY };
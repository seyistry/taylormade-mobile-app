import AsyncStorage from "@react-native-async-storage/async-storage";

const REG_STORAGE_KEY = `)W4"4-)bZ.KkMT6%cM1#X>|axjX0=Q`;
const LOG_STORAGE_KEY = `|.=wzmG>i&MDK7)?fHmh"X@_y5YGZD`;

export const storeRegData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        const stored_data = await AsyncStorage.getItem(REG_STORAGE_KEY);
        if (stored_data === null) {
            // console.log(stored_data)
            await AsyncStorage.setItem(REG_STORAGE_KEY, jsonValue);
        } else {
            // console.log(stored_data)
            await AsyncStorage.mergeItem(REG_STORAGE_KEY, jsonValue);
        }
    } catch (e) {
        console.log(e);
    }
};

export const getRegData = async () => {
    try {
        const stored_data = await AsyncStorage.getItem(REG_STORAGE_KEY);
        // console.log(stored_data);
        return stored_data === null ? null : JSON.parse(stored_data);
    } catch (e) {
        console.log(e);
    }
};

export const removeRegData = async () => {
    try {
        await AsyncStorage.removeItem(REG_STORAGE_KEY);
    } catch (e) {
        console.log(e);
    }
};

export const storeLogData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        const stored_data = await AsyncStorage.getItem(LOG_STORAGE_KEY);
        if (stored_data === null) {
            // console.log(stored_data)
            await AsyncStorage.setItem(LOG_STORAGE_KEY, jsonValue);
        } else {
            // console.log(stored_data)
            await AsyncStorage.mergeItem(LOG_STORAGE_KEY, jsonValue);
        }
    } catch (e) {
        console.log(e);
    }
};

export const getLogData = async () => {
    try {
        const stored_data = await AsyncStorage.getItem(LOG_STORAGE_KEY);
        console.log(stored_data);
        return stored_data === null ? null : JSON.parse(stored_data);
    } catch (e) {
        console.log(e);
    }
};

export const removeLogData = async () => {
    try {
        await AsyncStorage.removeItem(LOG_STORAGE_KEY);
        console.log("Done");
    } catch (e) {
        console.log(e);
    }
};

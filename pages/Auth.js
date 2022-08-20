import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const isLogedIn = async () => {
    const value = await AsyncStorage.getItem("token");  
    if (value!=null)
        return true
    else return false  
}

const isNotLogedIn = async () => {
    const value = await AsyncStorage.getItem("token");  
    if (value==null)
        return true
    else return false  
}

const LogOut = async () => {
    await AsyncStorage.removeItem("token");
}

export {LogOut, isLogedIn, isNotLogedIn}
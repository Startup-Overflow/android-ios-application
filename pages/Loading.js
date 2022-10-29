import React, {useEffect} from "react";
import { Image } from "react-native";
import { isLogedIn } from "./Auth.js";

const Loading = (props) => {
    
    (async () =>{
        if (await isLogedIn()){
            props.navigation.navigate("HomeScreen")
        }
        else{
            props.navigation.navigate("Register")
        }
    })()

    return(
        <Image 
        source={require('../logo.png')} 
        style={{ width: 350, height: 520, }}
    />    
    )
}

export default Loading
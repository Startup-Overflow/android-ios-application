import React from "react";
import { View, Button, Text } from "react-native";
import style from "../Styles";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';

const HeaderIcons = () => {
    return(
        <View style={style.row}>
          <FontAwesome.Button style={style.icon} color="#000000" size={25} name="search" onPress={() => console.log('This is a button!')} />
          <Entypo.Button style={style.icon} color="#000000" size={25}  name="bell" onPress={() => console.log('This is a button!')} />
          <Entypo.Button style={style.icon} color="#000000" size={25}  name="chat" onPress={() => console.log('This is a button!')} />
          {/* <AntDesign.Button style={style.icon} color="#000000" size={25}  name="user" onPress={() => console.log('This is a button!')} /> */}
        </View>
    )
}

export default HeaderIcons;
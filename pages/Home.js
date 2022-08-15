import React from "react";
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import style from "../Styles";
// import 'react-native-gesture-handler';
import HeaderIcons from "../components/HeaderIcons";
import Blogs from "./Blogs";
import Login from "./Login";
import { TextInput } from "react-native-gesture-handler";


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Footer = () => {
    return(
        <Tab.Navigator>
            {/* <Text>Hello</Text> */}
        <Tab.Group name="Hello">
        <Tab.Screen name="Home" component={Blogs} />
        <Tab.Screen name="Settings" component={Login} />
        </Tab.Group>
        </Tab.Navigator>
    )
}

const Home = () => {
    return(
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Blogs"
            options={{
                headerTitle: (props) => <TextInput style={style.col}/>,
                headerRight: () => <HeaderIcons/>
            }}
  
            component={Footer}/>
          <Drawer.Screen name="Login" component={Login}/>
        </Drawer.Navigator>
    )
}

export default Home
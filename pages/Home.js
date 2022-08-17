import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import style from "../Styles";
// import 'react-native-gesture-handler';
import HeaderIcons from "../components/HeaderIcons";
import Blogs from "./Blogs";
import Mentors from "./Mentors";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import AddPost from "./AddPost";
import Resources from "./Resources";
import Discussion from "./Discussion";
import Account from "./Account";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Zocial from 'react-native-vector-icons/Zocial'
import Partners from './Partners'
import Investors from './Investors'
import Incubators from './Incubators'
import Schemes from './Schemes' 
import OnlineCourses from './OnlineCourses' 
import Events from './Events' 
import BusinessIdeas from "./BusinessIdeas";
import Learn from "./Learn";
import { ListItem, Avatar } from "@react-native-material/core";
import { Text as MaterialText } from "@react-native-material/core";
import Books from "./Books";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const bottomHeight = 60

const Footer = (props) => {
    return(
        <Tab.Navigator>
        <Tab.Screen name="Resources" 
            component={Resources} 
            options={{
                title: 'Resources',
                tabBarIcon: () => <FontAwesome5.Button 
                                        style={style.icon} 
                                        color="#000000" 
                                        size={25} 
                                        name="box-open"
                                        onPress={() => props.navigation.navigate('Resources')}
                                    />,
                headerShown: false,
                tabBarStyle: { height: bottomHeight },
            }}
        />
        <Tab.Screen name="BusinessIdeas" 
            component={BusinessIdeas} 
            options={{
                title: 'Business Ideas',
                tabBarIcon: () => <MaterialCommunityIcons.Button 
                                        style={style.icon} 
                                        color="#000000" 
                                        size={30} 
                                        name="brain"
                                        onPress={() => props.navigation.navigate('BusinessIdeas')}
                                    />,
                headerShown: false,
                tabBarStyle: { height: bottomHeight },
            }}
        />
        <Tab.Screen name="Learn" 
            component={Learn} 
            options={{
                title: 'Learn',
                tabBarIcon: () => <FontAwesome.Button 
                                        style={style.icon} 
                                        color="#000000" 
                                        size={30} 
                                        name="graduation-cap"
                                        onPress={() => props.navigation.navigate('Learn')}
                                    />,
                headerShown: false,
                tabBarStyle: { height: bottomHeight },
            }}
        />

        <Tab.Screen name="Blogs" 
            component={Blogs} 
            options={{
                title: 'Feed',
                tabBarOptions: { 
                    showIcon: true 
                    },
                tabBarIcon: () => <FontAwesome.Button 
                                        style={style.icon} 
                                        color="#000000" 
                                        size={25} 
                                        name="feed"
                                        onPress={() => props.navigation.navigate('Blogs')}
                                    />,
                headerShown: false,
                tabBarStyle: { height: bottomHeight },
            }}
        />
        <Tab.Screen name="Discussion" 
            component={Discussion} 
            options={{
                title: 'Discussion',
                tabBarIcon: () => <MaterialIcons.Button 
                                        style={style.icon} 
                                        color="#000000" 
                                        size={30} 
                                        name="question-answer"
                                        onPress={() => props.navigation.navigate('Discussion')}
                                    />,
                headerShown: false,
                tabBarStyle: { height: bottomHeight },
            }}
        />

        </Tab.Navigator>
    )
}

const Home = (props) => {
    return(
        <Drawer.Navigator 
        initialRouteName="Home" 
        drawerContent={props =>
             <ScrollView>
                <View style={{justifyContent: 'center', alignItems: 'center', margin:10}} >
                    <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={150} />
                    <MaterialText variant="h5" style={{fontWeight: 'bold'}}>Ujjwal Kar</MaterialText>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                    <ListItem
                        title="Home"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('Home')}
                    />
                    <ListItem
                        title="Mentors"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate({
                            name:'Mentors',
                            params: {post:"hello"}
                        })}
                    />
                    <ListItem
                        title="Partners"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('Partners')}
                    />
                    <ListItem
                        title="Investors"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('Investors')}
                    />
                    <ListItem
                        title="Incubators"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('Incubators')}
                    />
                    <ListItem
                        title="Online Courses"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('OnlineCourses')}
                    />
                    <ListItem
                        title="Books and Summeries"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('Books')}
                    />
                    <ListItem
                        title="Events"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('Events')}
                    />
                    <ListItem
                        title="Schemes and Policies"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('Schemes')}
                    />
                    <ListItem
                        title="Settings"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('Schemes')}
                    />
                    <ListItem
                        title="Privacy Policy"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('Schemes')}
                    />
                    <ListItem
                        title="Terms and Conditions"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('Schemes')}
                    />
                    <ListItem
                        title="Logout"
                        leading={<FontAwesome5 name="chalkboard-teacher" size={18} />}
                        trailing={props => <MaterialCommunityIcons name="chevron-right" {...props} />}
                        onPress={() => props.navigation.navigate('Schemes')}
                    />
             </ScrollView>}
        >
            <Drawer.Screen name="Home" options={options} component={Footer}/>
            <Drawer.Screen name="Mentors" options={options} component={Mentors}/>
            <Drawer.Screen name="Partners" options={options} component={Partners}/>
            <Drawer.Screen name="Investors" options={options} component={Investors}/>
            <Drawer.Screen name="Incubators" options={options} component={Incubators}/>
            <Drawer.Screen name="Schemes" options={options} component={Schemes}/>
            <Drawer.Screen name="Online Courses" options={options} component={OnlineCourses}/>
            <Drawer.Screen name="Events" options={options} component={Events}/>
            <Drawer.Screen name="Books" options={options} component={Books}/>
        </Drawer.Navigator>
    )
}

const options = {
    headerTitle: (props) =>
    <Image 
        source={require('../logo.png')} 
        style={{ width: 170, height: 80, }}
    />
    ,
    headerRight: () => <HeaderIcons/>,
}

// const home = options["drawerIcon"] = () =>  <MaterialIcons.Button 
// style={style.icon} 
// color="#000000" 
// size={30} 
// name="question-answer"
// // onPress={() => props.navigation.navigate('Discussion')}
// />


export default Home
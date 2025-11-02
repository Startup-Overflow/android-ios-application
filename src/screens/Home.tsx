import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
  },
});

// import React, { useEffect } from "react";
// import { View, Text, Image, StyleSheet } from "react-native";
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { ScrollView } from "react-native-gesture-handler";
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { ListItem, Avatar, Text as MaterialText } from "@react-native-material/core";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NavigationProp, ParamListBase, useNavigation, DrawerActions } from '@react-navigation/native';
// // import HeaderIcons from "../components/HeaderIcons";
// // import { isNotLogedIn } from "./Auth";
// import { TouchableOpacity } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons";

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();
// const bottomHeight = 60;

// interface NavProps {
//   navigation: NavigationProp<ParamListBase>;
// }

// /* ✅ Minimal Placeholder Screens */
// const PlaceholderScreen = ({ title }: { title: string }) => (
//   <View style={styles.center}>
//     <Text style={styles.title}>{title} Screen</Text>
//   </View>
// );

// const Blogs = () => <PlaceholderScreen title="Blogs" />;
// const Mentors = () => <PlaceholderScreen title="Mentors" />;
// const MyResources = () => <PlaceholderScreen title="My Resources" />;
// const Discussion = () => <PlaceholderScreen title="Discussion" />;
// const Learn = () => <PlaceholderScreen title="Learn" />;
// const Partners = () => <PlaceholderScreen title="Partners" />;
// const Investors = () => <PlaceholderScreen title="Investors" />;
// const Incubators = () => <PlaceholderScreen title="Incubators" />;
// const Schemes = () => <PlaceholderScreen title="Schemes" />;
// const OnlineCourses = () => <PlaceholderScreen title="Online Courses" />;
// const Events = () => <PlaceholderScreen title="Events" />;
// const Books = () => <PlaceholderScreen title="Books" />;

// /* ✅ Bottom Tab Navigator */
// const Footer: React.FC<NavProps> = ({ navigation }) => {
//   // useEffect(() => {
//   //   (async () => {
//   //     if (await isNotLogedIn()) {
//   //       navigation.navigate("Home");
//   //     }
//   //   })();
//   // }, []);

//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { height: bottomHeight } }}>
//       <Tab.Screen name="MyResources" component={MyResources} options={{
//         title: 'Resources',
//         tabBarIcon: () => (<FontAwesome5 name="box-open" size={20} />),
//       }} />
//       <Tab.Screen name="Learn" component={Learn} options={{
//         title: 'Learn',
//         tabBarIcon: () => (<FontAwesome name="graduation-cap" size={20} />),
//       }} />
//       <Tab.Screen name="Add" component={Blogs} options={{
//         title: 'New',
//         tabBarIcon: () => (<MaterialIcons name="add-circle-outline" size={24} />),
//       }} />
//       <Tab.Screen name="Blogs" component={Blogs} options={{
//         title: 'Feed',
//         tabBarIcon: () => (<FontAwesome name="feed" size={20} />),
//       }} />
//       <Tab.Screen name="Discussion" component={Discussion} options={{
//         title: 'Discussion',
//         tabBarIcon: () => (<MaterialIcons name="question-answer" size={22} />),
//       }} />
//     </Tab.Navigator>
//   );
// };

// const HeaderIcons: React.FC = () => {
//   const navigation = useNavigation<NavigationProp<ParamListBase>>();

//   return (
//     <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
//       {/* Drawer Toggle Button */}
//       <TouchableOpacity
//         onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
//         style={{ marginHorizontal: 8 }}
//       >
//         <MaterialIcons name="menu" size={26} color="#000" />
//       </TouchableOpacity>

//       {/* Notifications Button */}
//       <TouchableOpacity
//         onPress={() => navigation.navigate("Notifications" as never)}
//         style={{ marginHorizontal: 8 }}
//       >
//         <Ionicons name="notifications-outline" size={24} color="#000" />
//       </TouchableOpacity>

//       {/* Profile Button */}
//       <TouchableOpacity
//         onPress={() => navigation.navigate("Profile" as never)}
//         style={{ marginHorizontal: 8 }}
//       >
//         <Ionicons name="person-circle-outline" size={28} color="#000" />
//       </TouchableOpacity>
//     </View>
//   );
// };


// /* ✅ Drawer Wrapper */
// const Home: React.FC<NavProps> = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Home"
//       // screenOptions={{ headerTitle: HeaderLogo, headerRight: () => <HeaderIcons /> }}
//       drawerContent={(drawerProps:any) => <CustomDrawer {...drawerProps} />}
//     >
//       <Drawer.Screen name="Home" component={Footer} />
//       <Drawer.Screen name="Mentors" component={Mentors} />
//       <Drawer.Screen name="Partners" component={Partners} />
//       <Drawer.Screen name="Investors" component={Investors} />
//       <Drawer.Screen name="Incubators" component={Incubators} />
//       <Drawer.Screen name="Schemes" component={Schemes} />
//       <Drawer.Screen name="Courses" component={OnlineCourses} />
//       <Drawer.Screen name="Events" component={Events} />
//       <Drawer.Screen name="Books" component={Books} />
//     </Drawer.Navigator>
//   );
// };

// /* ✅ Header Logo */
// // const HeaderLogo = () => (
// //   // <Image source={require('../assets/images/azadi.png')} style={{ width: 170, height: 80 }} resizeMode="contain" />
// // );

// /* ✅ Drawer Content */
// const CustomDrawer = ({ navigation }: NavProps) => (
//   <ScrollView style={{ backgroundColor: '#404040' }}>
//     <View style={{ alignItems: 'center', margin: 10 }}>
//       <Avatar image={{ uri: "https://avatars.githubusercontent.com/u/55041104?v=4" }} size={120} />
//       <MaterialText variant="h6" style={{ color: 'white', marginTop: 10 }}>Ujjwal Kar</MaterialText>
//     </View>
//     <DrawerItem label="Home" icon="home" onPress={() => navigation.navigate('Home')} />
//     <DrawerItem label="Mentors" icon="chalkboard-teacher" onPress={() => navigation.navigate('Mentors')} />
//     <DrawerItem label="Books" icon="bookshelf" onPress={() => navigation.navigate('Books')} />
//     <DrawerItem label="Logout" icon="logout" onPress={async () => {
//       await AsyncStorage.removeItem('token');
//       navigation.navigate('Home');
//     }} />
//   </ScrollView>
// );

// const DrawerItem = ({ label, icon, onPress }: { label: string; icon: string; onPress: () => void }) => (
//   <ListItem title={label} leading={<FontAwesome5 name={icon} size={18} color="white" />} onPress={onPress} />
// );

// /* ✅ Basic Styling */
// const styles = StyleSheet.create({
//   center: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2' },
//   title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
// });

// export default Home;

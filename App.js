import React from 'react';
import { Text, View, Image } from 'react-native';
import Blogs from './pages/Blogs.js';
import Mentors from './pages/Mentors.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Home from './pages/Home.js';
import AddPost from './pages/AddPost.js';
import Read from './pages/Read.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import style from './Styles.js';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Register" 
        component={Register}
        options={{
          title: 'Register',
          headerShown: false,
          cardStyle: { backgroundColor: '#d9d9d9' },
        }}  
      />
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          title: 'Register',
          headerShown: false,
          cardStyle: { backgroundColor: '#d9d9d9' },
        }}  
      />
      <Stack.Screen 
        name="Home" 
        component={Blogs}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#d9d9d9' },
        }}  
      />
      <Stack.Screen 
        name="Mentors" 
        component={Mentors}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#d9d9d9' },
        }}  
      />
      <Stack.Screen 
        name="HomeScreen" 
        component={Home}
        options={{
          headerShown: false,
          // cardStyle: { backgroundColor: '#d9d9d9' },
        }}  
      />
      <Stack.Screen 
        name="AddPost" 
        component={AddPost}
        options={{
          headerShown: false,
          // cardStyle: { backgroundColor: '#d9d9d9' },
        }}  
      />
      <Stack.Screen 
        name="Read" 
        component={Read}
        options={{
          title:'Back',
          headerLeft: ({ navigation: { goBack } }) =>  <AntDesign.Button 
                              style={style.icon} 
                              color="#000000" 
                              size={25} 
                              name="back"
                              // onPress={() => goBack()}
                          />,
          headerRight: (props) =>
            <Image 
                source={require('./logo.png')} 
                style={{ width: 170, height: 80, }}
            />
          }}
            // cardStyle: { backgroundColor: '#d9d9d9' },
          // tabBarOptions: { 
          //   showIcon: true 
          //   },
            // leftButton: () => <AntDesign.Button 
            //                     style={style.icon} 
            //                     color="#000000" 
            //                     size={25} 
            //                     name="back"
            //                     onPress={() => props.navigation.navigate('Blogs')}
            //                 />,
        // }}  
      />
    </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
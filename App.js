import React from 'react';
import { Text, View } from 'react-native';
import Blogs from './pages/Blogs.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Home from './pages/Home.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
        name="Blogs" 
        component={Blogs}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#d9d9d9' },
        }}  
      />
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown: false,
          // cardStyle: { backgroundColor: '#d9d9d9' },
        }}  
      />
      
    </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
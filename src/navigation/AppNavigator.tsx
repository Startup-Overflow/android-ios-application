import React from 'react';
import Home from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Startup Overflow" component={Home} options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default AppNavigator;
import React from 'react';
import { Text, View, Image } from 'react-native';
import Blogs from './pages/Blogs.js';
import Mentors from './pages/Mentors.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Home from './pages/Home.js';
import AddPost from './pages/AddPost.js';
import Read from './pages/Read.js';
import ReadResources from './pages/ReadResources.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign.js';
import style from './Styles.js';
import SBlog from './pages/SBlog.js';
import OnlineCourses from './pages/OnlineCourses.js';
import ReadQuestions from './pages/ReadQuestions.js';
import Loading from './pages/Loading.js';
import CheckUser from './pages/CheckUser.js';
import Resources from "./pages/Resources";
import Woman from './pages/Woman.js';
import Profile from './pages/Profile.js';
import RegisterAsMentor from './pages/RegisterAsMentor.js';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
        name="Loading" 
        component={Loading}
        options={{
          title: 'Loading',
          headerShown: false,
          cardStyle: { backgroundColor: '#d9d9d9' },
        }}  
      />

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
        name="Profile" 
        component={Profile}
        // options={{
          // headerShown: false,
          // cardStyle: { backgroundColor: '#d9d9d9' },
        // }}  
      />

      <Stack.Screen 
        name="RegisterAsMentor" 
        component={RegisterAsMentor}
        // options={{
          // headerShown: false,
          // cardStyle: { backgroundColor: '#d9d9d9' },
        // }}  
      />


      <Stack.Screen 
        name="Woman" 
        component={Woman}
        options={{
          title:'',
        //   // headerShown: false,
        //   cardStyle: { backgroundColor: '#d9d9d9' },
        headerRight: (props) =>
        <Image 
            source={require('./logo.png')} 
            style={{ width: 170, height: 80, }}
        />
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
          // headerLeft: (props) =>  <AntDesign.Button 
          //                     style={style.icon} 
          //                     color="#000000" 
          //                     size={25} 
          //                     name="back"
          //                     onPress={() => props.navigation.navigate('Blogs')}
                          // />,
          headerRight: (props) =>
            <Image 
                source={require('./logo.png')} 
                style={{ width: 170, height: 80, }}
            />
          }}
      />
      <Stack.Screen 
        name="ReadResources" 
        component={ReadResources}
        options={{
          title:'Back',
          // headerLeft: (props) =>  <AntDesign.Button 
          //                     style={style.icon} 
          //                     color="#000000" 
          //                     size={25} 
          //                     name="back"
          //                     onPress={() => props.navigation.navigate('Blogs')}
                          // />,
          headerRight: (props) =>
            <Image 
                source={require('./logo.png')} 
                style={{ width: 170, height: 80, }}
            />
          }}
      />
      <Stack.Screen 
        name="ReadQuestions" 
        component={ReadQuestions}
        options={{
          title:'Back',
          // headerLeft: (props) =>  <AntDesign.Button 
          //                     style={style.icon} 
          //                     color="#000000" 
          //                     size={25} 
          //                     name="back"
          //                     onPress={() => props.navigation.navigate('Blogs')}
                          // />,
          headerRight: (props) =>
            <Image 
                source={require('./logo.png')} 
                style={{ width: 170, height: 80, }}
            />
          }}
      />
      <Stack.Screen 
        name="SBlog" 
        component={SBlog}
        options={{
          title:'Back',
          // headerLeft: (props) =>  <AntDesign.Button 
          //                     style={style.icon} 
          //                     color="#000000" 
          //                     size={25} 
          //                     name="back"
          //                     onPress={() => props.navigation.navigate('SBlog')}
                          // />,
          headerRight: (props) =>
            <Image 
                source={require('./logo.png')} 
                style={{ width: 170, height: 80, }}
            />
          }}
      />

      <Stack.Screen 
        name="Resources" 
        component={Resources}
        options={{
          title:'Back',
          // headerLeft: (props) =>  <AntDesign.Button 
          //                     style={style.icon} 
          //                     color="#000000" 
          //                     size={25} 
          //                     name="back"
          //                     onPress={() => props.navigation.navigate('OnlineCourses')}
                          // />,
          headerRight: (props) =>
            <Image 
                source={require('./logo.png')} 
                style={{ width: 170, height: 80, }}
            />
          }}
      />
    </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
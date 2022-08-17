import React from "react";
import HOST from "../Hosts.js";
import { useState } from "react";
import { Button, View, TextInput, StyleSheet, Text, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from "../Styles.js";
import { isLogedIn } from "./Auth.js";

const Login = (props) => {
    (async () =>{
        if (await isLogedIn()){
            props.navigation.navigate("HomeScreen")
        }
     })()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)
    const [msg, setMsg] = useState('')

    const submit = async (e) => {
        if (username==''){
            setMsg("Username is Required")
        }
        else if (password==''){
            setMsg("Password Field is Required")
        }
        else{
            console.log("Sending Request...")
            const response = await fetch(`${HOST}/users/login/`,{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    username,
                    password,
                })
            })
            console.log("Got Response...")
            const content = await response.json()
            console.log(content)
            if (typeof content.token !== 'undefined') {
                await AsyncStorage.setItem("token",content.token);
                console.log("Token Saved")
                setRedirect(true)
            }
            else{
                setMsg("Invalid Username or Password")
            }
        }
    }
    if (redirect){
        useEffect( () => props.navigation.navigate('Home') , [] )
        // props.navigation.navigate("Home")
    }

    return(
        <View style={style.center} >
            <Image 
                source={require('../azadi.png')} 
                style={{ width: 190, height: 160, }}
            />
            <Text style={style.h1}>Let's Sign In</Text>
            <TextInput style={style.input} placeholder="Username" name="username" onChangeText={e => setUsername(e) }/>
            <TextInput style={style.input} secureTextEntry={true} placeholder="Password" name="password" onChangeText={e => setPassword(e) }/>
            <Text>{msg}</Text>
            <View style={style.row}>
                <View style={style.btn}>
                    <Button 
                        title="Don't have an account"
                        color="#02a34e"
                        style={style.btn}
                        onPress={()=> props.navigation.navigate("Register")}
                    />
                </View>
                <View style={style.btn}>
                    <Button 
                        title="Login"
                        color="#f29520"
                        style={style.btn}
                        onPress={()=> submit()}
                    />
                </View>
            </View>
            <Image 
                source={require('../logo.png')} 
                style={{ width: 280, height: 100, marginTop: 100}}
            />

            {/* <Button
                title="Home"
                onPress={()=> props.navigation.navigate("Home")}
            /> */}
        </View> 
    )

}

const styles = StyleSheet.create({
    input:{
        borderWidth:5,
        borderColor: 'black'
    }
})
export default Login;
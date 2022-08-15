import React from "react";
import HOST from "../Hosts.js";
import { useState } from "react";
import { Button, View, ScrollView, TextInput, StyleSheet, Text, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from "../Styles.js";
import { isLogedIn } from "./Auth.js";

const Register = (props) => {
    (async () =>{
        if (await isLogedIn()){
            props.navigation.navigate("Home")
        }
    })()
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false)
    const [msg, setMsg] = useState('')
    
    const submit = async (e) => {
        console.log(await isLogedIn())

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(first_name, last_name, username, password, confirm_password)
    
        if (first_name==''){
            setMsg("First Name is Required")
        }
        else if (last_name==''){
            setMsg("Last Name is Required")
        }
        else if (email==''){
            setMsg("Email Id is Required")
        }
        else if (re.test(email)){
            setMsg("Email Id is not Valid")
        }
        else if (username==''){
            setMsg("Username is Required")
        }
        else if (password==''){
            setMsg("Password Field is Required")
        }
        else if (password != confirm_password){
            setMsg("Password did'nt matched")
        }
        else{
            console.log("Sending Request...")            
            const response = await fetch(`${HOST}/users/register/`,{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                        username,
                        password,
                        confirm_password,
                        first_name,
                        last_name,
                        email
                })
            })    
            
            console.log("Got Response...")
            const content = await response.json()
            console.log(content)

            setMsg(content.token)
            if (typeof content.token !== 'undefined') {
                await AsyncStorage.setItem("token",content.token);
                console.log("Token Saved")
                setRedirect(true)
            }
            else{
                setMsg(token.Message)
            }
        }
    }

    if (redirect){
        props.navigation.navigate("Home")
    }


    return(
        <View style={style.center} >
            <Image 
                source={require('../azadi.png')} 
                style={{ width: 190, height: 160, }}
            />
            <Text style={style.h1}>Please Sign Up</Text>
            <View style={style.row}>
                <TextInput style={style.col} placeholder="First Name" name="first_name" id="first_name" onChange={e => setFirstName(e) } required />
                <TextInput style={style.col} placeholder="Last Name" name="last_name" onChange={e => setLastName(e) } required/>
            </View>
            <View>
                <TextInput style={style.input} placeholder="Email" name="email" onChange={e => setEmail(e) } required/>
                <TextInput style={style.input} placeholder="Username" name="username" onChange={e => setUsername(e) } required/>
            </View>
            <View style={style.row}>
                <TextInput style={style.col} secureTextEntry={true} placeholder="Password" name="password" onChange={e => setPassword(e) } required/>
                <TextInput style={style.col} secureTextEntry={true} placeholder="Confirm Password" name="confirm_password" onChange={e => setConfirmPassword(e) } required/>
            </View>
            <Text style={{color:'red', padding:10}}>{msg}</Text>
            {/* <PasswordInputText/> */}

            <View style={style.row}>
                <View style={style.btn}>
                    <Button 
                        style={style.btn} 
                        color="#02a34e"
                        title="Already have an account"
                        onPress={()=> props.navigation.navigate("Login")}
                    />
                </View>
                <View style={style.btn}>
                    <Button
                        style={style.btn}
                        title="Submit"
                        color="#f29520"
                        onPress={()=> submit()}
                    />
                </View>
            </View>

            <Image 
                source={require('../logo.png')} 
                style={{ width: 280, height: 100, }}
            />
        </View> 
    )
}
 
// )()
// }

const styles = StyleSheet.create({
    input:{
        borderWidth:5,
        borderColor: 'black'
    }
})
export default Register;
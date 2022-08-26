import React, { useState } from "react";
import { Text, Platform, KeyboardAvoidingView, TextInput, View, handleHeightChange, SafeAreaView, ScrollView, Button } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import { Picker } from "@react-native-picker/picker/";
import style from "../Styles";
import { useWindowDimensions } from "react-native";
import HOST from "../Hosts";

const RegisterAsMentor = () => {
	const richText = React.useRef();
    const {width} = useWindowDimensions();
    // const [type, setType] = useState('')
    const [linkedin, setLinkedin] = useState("")
    const [portfolio, setPortfolio] = useState("")
    const [mail, setMail] = useState("")
    const [expert, setDomExp] = useState("")

    // const submitprofile = async (e) => {
    //     console.log("Sending Request...")
    //     const response = await fetch(`${HOST}/type`,{
    //         method:"POST",
    //         headers: {"Content-Type": "application/json"},
    //         body:JSON.stringify({
    //             type
    //         })
    //     })
    //     console.log("Got Response...")
    //     const content = await response.json()
    //     console.log(content)
    // }

	return (
        <SafeAreaView>
            <ScrollView>
            <View style={{marginTop: 10}}>
                <RichEditor
                    ref={richText}
                    style={{width: width, marginLeft: 0}}
                    placeholder={"Description"}
                    onChange={ descriptionText => {
                        setDesc(descriptionText);
                    }}
                    onHeightChange={handleHeightChange}
                />
                <RichToolbar
                    editor={richText}
                    actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1, ]}
                    iconMap={{ [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>), }}
                />
            </View>
            <TextInput style={[style.input, {marginLeft: 0, width: width, borderWidth: 0}]} placeholder="Linkedin" onChangeText={(e)=>setLinkedin(e)}></TextInput>
            <TextInput style={[style.input, {marginLeft: 0, width: width, borderWidth: 0}]} placeholder="Portfolio" onChangeText={(e)=>setPortfolio(e)}></TextInput>
            <TextInput style={[style.input, {marginLeft: 0, width: width, borderWidth: 0}]} placeholder="Mail" onChangeText={(e)=>setMail(e)}></TextInput>
            <TextInput style={[style.input, {marginLeft: 0, width: width, borderWidth: 0}]} placeholder="Domain Expert" onChangeText={(e)=>setDomExp(e)}></TextInput>

            <Button 
                title="Change Profile Status"
                color="#f29520"
                style={style.btn}
                onPress={()=> submitprofile()}
            />
            </ScrollView>
        </SafeAreaView>
    );
};

export default RegisterAsMentor;

import React, { useState } from "react";
import { Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, Button } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import { Picker } from "@react-native-picker/picker/";
import style from "../Styles";
import { useWindowDimensions } from "react-native";
import HOST from "../Hosts";

const Profile = () => {
	const richText = React.useRef();
    const {width} = useWindowDimensions();
    const [type, setType] = useState('')

    const submitprofile = async (e) => {
        console.log("Sending Request...")
        const response = await fetch(`${HOST}/type`,{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({
                type
            })
        })
        console.log("Got Response...")
        const content = await response.json()
        console.log(content)
    }

	return (
        <SafeAreaView>
            <ScrollView>

                {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
                    <Text>Description:</Text>
                    <RichEditor
                        ref={richText}
                        onChange={ descriptionText => {
                            console.log("descriptionText:", descriptionText);
                        }}
                    />
                </KeyboardAvoidingView> */}
            <Picker
                style={[style.input,{width: width, marginLeft: 0, borderWidth: 0}]}
                selectedValue={type}
                onValueChange={(itemValue) => setType(itemValue)}
            >
                <Picker.Item label="Entrepreneur" value="Entrepreneur" />
                <Picker.Item label="Mentor" value="Mentor" />
                <Picker.Item label="Partner" value="Partner" />
                <Picker.Item label="Investor" value="Investor" />
                <Picker.Item label="Incubator" value="Incubator" />
                <Picker.Item label="Incubator" value="Incubator" />
            </Picker>
            <Button 
                title="Change Profile Status"
                color="#f29520"
                style={style.btn}
                onPress={()=> submitprofile()}
            />
            </ScrollView>

            {/* <RichToolbar
                editor={richText}
                actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1, ]}
                iconMap={{ [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>), }}
            /> */}
        </SafeAreaView>
    );
};

export default Profile;

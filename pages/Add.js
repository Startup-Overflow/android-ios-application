import React, { useState } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import style from "../Styles";
import Header from "../components/Header";
import {Picker} from "@react-native-picker/picker";
import { KeyboardAvoidingView, Text, useWindowDimensions } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";

export default function Add() {
    const [selectedValue, setSelectedValue] = useState("");
	const richText = React.useRef();
    const { width } = useWindowDimensions();

    return(
        <ScrollView>
            <Header>Add new Post</Header>
            <Picker
                style={[style.input]}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Post something" value="post" />
                <Picker.Item label="Ask something" value="ask" />
            </Picker>

            <TextInput style={style.input} placeholder="Title"></TextInput>

            {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}> */}
                    <Text>{"\n"}      Description:</Text>
                    <RichEditor
                        ref={richText}
                        style={{width: width-40, marginLeft: 10}}
                        onChange={ descriptionText => {
                            console.log("descriptionText:", descriptionText);
                        }}
                    />
                {/* </KeyboardAvoidingView> */}
            <RichToolbar
                editor={richText}
                actions={[ actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1, ]}
                iconMap={{ [actions.heading1]: ({tintColor}) => (<Text style={[{color: tintColor}]}>H1</Text>), }}
            />

        </ScrollView>
    )
}
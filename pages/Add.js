import React, { useState } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import style from "../Styles";
import Header from "../components/Header";
import {Picker} from "@react-native-picker/picker";
import { KeyboardAvoidingView, Text, useWindowDimensions, handleHeightChange } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";

export default function Add() {
    const [selectedValue, setSelectedValue] = useState("");
    const [desc, setDesc] = useState("");
	const richText = React.useRef();
    const { width } = useWindowDimensions();

    return(
        <ScrollView>
            <Header>Add new Post</Header>
            <Picker
                style={[style.input,{width: width, marginLeft: 0, borderWidth: 0}]}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Post something" value="post" />
                <Picker.Item label="Ask something" value="ask" />
            </Picker>
            <Text>{"\n"}</Text>

            <TextInput style={[style.input, {marginLeft: 0, width: width, borderWidth: 0}]} placeholder="Title"></TextInput>
            <Text>{"\n"}</Text>
            {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}> */}
                    <RichEditor
                        ref={richText}
                        style={{width: width, marginLeft: 0}}
                        placeholder={"Description"}
                        onChange={ descriptionText => {
                            console.log("descriptionText:", descriptionText);
                        }}
                        onHeightChange={handleHeightChange}

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
import React, { useState, useEffect } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import style from "../Styles";
import Header from "../components/Header";
import {Picker} from "@react-native-picker/picker";
import { KeyboardAvoidingView, Text, Button, useWindowDimensions, handleHeightChange, View } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import HOST from '../Hosts'
import MultiSelect from 'react-native-multiple-select';
import AsyncStorage from "@react-native-async-storage/async-storage";

const onSelectedItemsChange = (selectedItems) => {
    console.log({ selectedItems });
};

export default function Add() {
    const [selectedValue, setSelectedValue] = useState("");
    const [title, setTitle] = useState("");
    const [shrtdesc, setShrtDesc] = useState("");
    const [desc, setDesc] = useState("");
    const [catagories, setCatagories] = useState([{"id": 0, "name": "Loading..."}]);
    const [catagory, setCatagory] = useState("");
    const [hashtags, setHashtags] = useState([{"id": 0, "name": "Loading...", "desc":"Loading..."}]);
    const [hashtag, setHashtag] = useState("");
	const richText = React.useRef();
    const { width } = useWindowDimensions();
    const [msg, setMsg] = useState("")
    
    useEffect(() => {
        fetch(`${HOST}/hashtag/tag/`,{
          method:"GET",
          headers: {
            "Content-Type": "application/json",
            // "Authorization": `Token ${token}`
          }
      })
      .then(resp => resp.json())
      .then(resp => setHashtags(resp.map((tag)=>tag)))
      .catch(error => console.log(error))
    },[])
    
    useEffect(() => {
        fetch(`${HOST}/categories`,{
          method:"GET",
          headers: {
            "Content-Type": "application/json",
          }
      })
      .then(resp => resp.json())
      .then(resp => setCatagories(resp.map((tag)=>tag)))
      .catch(error => console.log(error))
      },[])

    console.log(hashtags)
    
    var url= ''

    const submit = async (e) => {
        const token = await AsyncStorage.getItem("token");

        if (selectedValue=="post"){
            url = `${HOST}/posts/`
        }
        else if(selectedValue=="ask"){
            url = `${HOST}/questions/`
        }

        console.log(token, url, title,
            shrtdesc,
            desc,
            catagory)
        
        setMsg("Posting Content...")
        const response = await fetch(`${HOST}/posts/`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body:JSON.stringify({
                title,
                shrtdesc,
                desc,
                catagory,
            })
        })

        console.log("Getting Response")
        const content = await response.json()
        console.log(content.Message)
        setMsg(content.Response)
    }

    
    return(
        <ScrollView>
            <Header>Add new Post</Header>
            <Picker
                style={[style.input,{width: width, marginLeft: 0, borderWidth: 0}]}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="What do you want to add ?" value="" />
                <Picker.Item label="Ask something" value="ask" />
                <Picker.Item label="Post something" value="post" />
            </Picker>
            <TextInput style={[style.input, {marginLeft: 0, width: width, borderWidth: 0}]} placeholder="Title" onChangeText={(e)=>setTitle(e)}></TextInput>
            <TextInput style={[style.input, {marginLeft: 0, width: width, borderWidth: 0}]} placeholder="Short Description" onChangeText={(e)=>setShrtDesc(e)}></TextInput>
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
            <Picker
                style={[style.input,{width: width, marginLeft: 0, borderWidth: 0}]}
                selectedValue={catagory}
                onValueChange={(itemValue) => setCatagory(itemValue)}
            >
            <Picker.Item label="Select Catagory" value="" />
                {catagories.map((e)=><Picker.Item key={e.id} id={e.id} label={e.name} value={e.name} />)}
            </Picker>
            <View style={{alignItems: 'center'}}>
                <Text style={{color:'red', fontSize:25}}>{msg}</Text>
            </View>
            <Button 
                title="Submit"
                color="#f29520"
                style={style.btn}
                onPress={()=> submit()}
            />
        </ScrollView>
    )
}
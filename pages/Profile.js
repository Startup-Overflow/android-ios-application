import React, { useState } from "react";
import { Text, StyleSheet, Platform, KeyboardAvoidingView, TextInput, View, handleHeightChange, SafeAreaView, ScrollView, Button } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import { Picker } from "@react-native-picker/picker/";
import style from "../Styles";
import { useWindowDimensions } from "react-native";
import HOST from "../Hosts";
import { SectionGrid } from "react-native-super-grid";

const Profile = (props) => {
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
    const items = [
        { name: 'Register for Mentorship', code: 'gold', page:'RegisterAsMentor', api:'hati', id:12 },
      ];
    
  return (
    <SectionGrid
      itemDimension={250}
      sections={[
        {
          data: items,
        },
    ]}
      style={styles.gridView}
      renderItem={({ item }) => (
        <View key={item.id} id={item.id} style={[styles.itemContainer, { backgroundColor: item.code }]} onPress={() => console.log("hello")}>
          {/* {item.page=='resources'? */}
            <Text style={[styles.itemName,{fontSize:34}]}  onPress={() => props.navigation.navigate({
              name: item.page,
              params: {post: item.api+"/"+item.id }
            })}>{item.name}</Text>
          {/* :<Text style={styles.itemName}  onPress={() => navigation.navigate({
                          name:'SBlog',
                          params: {post: "categories/"+item.id }
                        })}>{item.name}</Text> */}

          {/* } */}
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={{marginBottom:50, marginTop:50}}>
          {/* <TextInput style={styles.input} placeholder="   Search..."></TextInput> */}
        </View>
      )}
    />
    );
};

const styles = StyleSheet.create({
    gridView: {
      flex: 1,
      margin: 5
      // padding: 8
    },
    input:{
      flex: 0,
      borderColor: "#cccccc",
      backgroundColor: "#ffffff",
      borderWidth: 2,
      borderRadius: 10,
      margin: 10,
      // paddingLeft: 15,
      marginBottom: 0,
      flexDirection: "column"
    },
    
    itemContainer: {
      justifyContent: 'center',
      borderRadius: 5,
      padding: 10,
      height: 110,
      textAlign: 'center'
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    sectionHeader: {
      flex: 1,
      fontSize: 15,
      fontWeight: '600',
      alignItems: 'center',
      backgroundColor: '#636e72',
      color: 'white',
      padding: 10,
    },
  });

  
export default Profile;

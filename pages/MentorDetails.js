import React from "react";
import { Text, ScrollView, Button, View } from "react-native";
import { ListItem, Avatar, Text as MaterialText  } from "@react-native-material/core";
import HOST from "../Hosts";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";


const Mentors = (props) => {

    return (
        <ScrollView style={{marginBottom:10, paddingBottom:10}} >
            <View style={{alignItems: 'center', justifyContent:'center', margin: 20}}>
                <Avatar image={{ uri: HOST+props.attachment }} size={180} />
                <MaterialText variant="h4">Ujjwal Kar{props.name}</MaterialText>
            </View>
        <ListItem
            title="Skills"
            secondaryText={'C++, Java, Python'}
        />
        <ListItem
            title="Experience"
            secondaryText={'C++, Java, Python'}
        />
        <ListItem
            title="Achievement"
            secondaryText={'C++, Java, Python'}
        />
        <ListItem
            title="Hobbies"
            secondaryText={'C++, Java, Python'}
        />
        <ListItem
            title="Interest"
            secondaryText={'C++, Java, Python'}
        />
    </ScrollView>
        )
}
const style = StyleSheet.create({
    like:{
        backgroundColor: "white",
        position:'relative'
    }
})
    

export default Mentors;
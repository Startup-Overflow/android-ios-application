import { useState, useEffect } from "react";
import { ScrollView, Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React from 'react';
import HOST from "../Hosts";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem, Avatar } from "@react-native-material/core";
import Fontisto from 'react-native-vector-icons/Fontisto'

const Questions = (props) => {
    return(
    <View style={{marginBottom:10, paddingBottom:10}} >
        <ListItem
            title={props.title}
            secondaryText={`
Posted 3 Min ago by ${props.username}
${props.hashtag.map((e)=>"\n#"+e)}
            `}
 
            onPress={() => props.navigation.navigate({
                name:'ReadQuestions',
                params: {post: 'questions/'+props.id}
            })}
        />
        <View style={{backgroundColor:'#ffffff', margin:5, marginTop:-1, marginBottom:10, paddingLeft:30, }}>
            {/* <Text style={{textAlign: 'left', position: 'absolute', fontSize:15}}></Text> */}
            <Text style={{textAlign: 'right', fontSize:15}}>{props.answer} Answers</Text>
        <View style={{flexDirection: "row", position: 'absolute'}}>
        <Text>0</Text>
            <Fontisto.Button 
                style={style.like} 
                color="#000000" 
                size={17} 
                name="like"
            />
            <Text>0</Text>
            <Fontisto.Button 
                style={style.like} 
                color="#000000" 
                size={17} 
                name="dislike"
            />
            </View>
            {/* {console.log(item.hashtag)} */}
        </View>
    </View>
    )
}

const style = StyleSheet.create({
    like:{
        backgroundColor: "white",
        position:'relative'
    }    
})
export default Questions;
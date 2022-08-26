import { useState, useEffect } from "react";
import { ScrollView, Text, View, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React from 'react';
import HOST from "../Hosts";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem, Avatar } from "@react-native-material/core";
import Fontisto from 'react-native-vector-icons/Fontisto'

const Items = (props) => (
    <View style={{marginBottom:10, paddingBottom:10}} >
        <ListItem
            leadingMode="avatar"
            leading={
                <Avatar image={{ uri: HOST+props.attachment }}/>
            }
            title={props.title}
            secondaryText={`
            Posted by ${props.username}
            `}

            onPress={() => props.navigation.navigate({
                name:'Read',
                params: {post: 'posts/views/'+props.id, ids: props.id, type: "posts"}
            })}
        />
        <View style={{backgroundColor:'#ffffff', margin:5, marginTop:-1, marginBottom:10, paddingLeft:30, }}>
            {/* <Text style={{textAlign: 'left', position: 'absolute', fontSize:15}}></Text> */}
            <Text style={{textAlign: 'right', fontSize:15}}>{props.comment} Comments</Text>
        <View style={{flexDirection: "row", position: 'absolute'}}>
        <Text>{props.like}</Text>
            <Fontisto.Button 
                style={style.like} 
                color="#000000" 
                size={17} 
                name="like"
                // onPress={() => props.navigation.navigate({
                //     name:'Blogs',
                //     params: {url: 'posts'}
                // })}
            />
            <Text>{props.unlike}</Text>
            <Fontisto.Button 
                style={style.like} 
                color="#000000" 
                size={17} 
                name="dislike"
                // onPress={() => props.navigation.navigate({
                //     name:'Blogs',
                //     params: {url: 'posts'}
                // })}
            />
            </View>
            {/* {console.log(item.hashtag)} */}
        </View>
    </View>
);

const style = StyleSheet.create({
    like:{
        backgroundColor: "white",
        position:'relative'
    }
})
    

export default Items;
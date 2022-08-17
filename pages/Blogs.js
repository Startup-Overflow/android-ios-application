import { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import React from 'react';
import HOST from "../Hosts";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem, Avatar } from "@react-native-material/core";

const Post = (props) => {
    return(
        <Text>{props.title}</Text>
    )
}

const Blogs = () => {
    const [posts, setPosts] = useState([{"title":"No article found", "id":"0"}])
    
    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem("token"); 
            fetch(`${HOST}/posts`,{
                method:"GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Token ${token}`
                }
            })
            .then(resp => resp.json())
            .then(resp => setPosts(resp))
            .catch(error => console.log(error))
        })()},[])
    
    return(
        <ScrollView>
            <ListItem
                leadingMode="avatar"
                leading={
                    <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
                }
                title="Brunch this weekend?"
                secondaryText="I'll be in your neighborhood doing errands this…"
            />
            <View style={{backgroundColor:'#ffffff', margin:5, marginTop:-1, marginBottom:10, paddingLeft:30, }}>
                <Text style={{textAlign: 'left', position: 'absolute', fontSize:15}}>Posted 3 Min ago by Ujjwal</Text>
                <Text style={{textAlign: 'right', fontSize:15}}>13 Comments</Text>
            </View>
            

            <ListItem
                leadingMode="avatar"
                leading={
                    <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
                }
                title="Brunch this weekend?"
                secondaryText="I'll be in your neighborhood doing errands this…"
            />
            <View style={{backgroundColor:'#ffffff', margin:5, marginTop:-1, marginBottom:10, paddingLeft:30, }}>
                <Text style={{textAlign: 'left', position: 'absolute', fontSize:15}}>Posted 3 Min ago by Ujjwal</Text>
                <Text style={{textAlign: 'right', fontSize:15}}>13 Comments</Text>
            </View>

            {posts.map(post => <Post key={post.id} id={post.id} title={post.title}/> )}
        </ScrollView>
    );
}



export default Blogs;
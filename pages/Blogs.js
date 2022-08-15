import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import React from 'react';
import HOST from "../Hosts";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        <View>
            <Text>Hello World</Text>
            {posts.map(post => <Post key={post.id} id={post.id} title={post.title}/> )}
        </View>
    );
}



export default Blogs;
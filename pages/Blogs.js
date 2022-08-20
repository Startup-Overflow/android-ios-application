import { useState, useEffect } from "react";
import { ScrollView, Text, View, SafeAreaView, FlatList, StyleSheet, RefreshControl } from "react-native";
import React from 'react';
import HOST from "../Hosts";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem, Avatar } from "@react-native-material/core";
import Fontisto from 'react-native-vector-icons/Fontisto'
import Items from "../components/Items";

const Blogs = (props) => {
    const [posts, setPosts] = useState([{"title":"No article found", "id":0, "hashtag":["Startup","Overflow"]}])
    const [refresh, setRefresh] = useState(false)

    const pullMe = () => {
        setRefresh(true)

        setTimeout(()=>{
            setRefresh(false)
        }, 4000)
    }

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
        })()
     },[])        

     return(
        <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={()=>pullMe()}/>}>
            { 
            posts.length==0? <Text>No data found</Text>:
            posts[0].id==0? <Text>Loading...</Text>:
            posts.map((e)=> 
                <Items
                    key={e.id}
                    id={e.id} 
                    title={e.title}  
                    hashtag={e.hashtag}
                    username={e.username}
                    comment={e.comment}
                    like={e.like}
                    unlike={e.unlike}
                    navigation={props.navigation}
                />)}
        </ScrollView>
    );
}

export default Blogs;
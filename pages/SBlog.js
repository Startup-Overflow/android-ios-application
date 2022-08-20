import { Text, ScrollView } from "react-native";
import Items from "../components/Items";
import React, { useState, useEffect } from "react";
import HOST from "../Hosts";
import AsyncStorage from "@react-native-async-storage/async-storage/";

const SBlog = ({navigation, route}) => {
    const [posts, setPosts] = useState([{"title":"No article found", "id":0, "hashtag":["Startup","Overflow"]}])
    
    console.log(`${HOST}/${route.params.post}`)

    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem("token"); 
            fetch(`${HOST}/${route.params.post}`,{
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

        // console.log(posts)

    return(
        <ScrollView>
            { 
            posts.length==0? <Text>No article found...</Text>:
            posts[0].id==0? <Text>Loading...</Text>:
            posts.map((e)=> 
                <Items
                    key={e.id}
                    id={e.id} 
                    title={e.title}  
                    attachment={e.attachment}
                    catagory={e.catagory}
                    hashtag={e.hashtag}
                    username={e.username}
                    comment={e.comment}
                    navigation={navigation}
                />)}
        </ScrollView>
    );
}

export default SBlog;
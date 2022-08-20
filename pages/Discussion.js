import React, {useState, useEffect} from "react";
import { ScrollView, Text, RefreshControl } from "react-native";
import { ListItem } from "@react-native-material/core";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AsyncStorage from "@react-native-async-storage/async-storage/";
import HOST from "../Hosts";
import Questions from "../components/Questions";

const Discussion = (props) => {
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
            fetch(`${HOST}/questions`,{
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

    posts.map((e)=>console.log(e.id))

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={()=>pullMe()}/>}>
            {
            posts.length==0? <Text>No data found</Text>:
            posts[0].id==0? <Text>Loading...</Text>:
            posts.map((e)=> <Questions 
                                id={e.id} 
                                key={e.id}
                                title={e.title} 
                                hashtag={e.hashtag} 
                                username={e.username}
                                answer={e.answer}   
                                navigation={props.navigation} 
                            />)}
        </ScrollView>
    )
}

export default Discussion;
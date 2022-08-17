import { Text } from "react-native";
import HOST from "../Hosts";
import React, { useEffect,useState } from "react";
import WebView from "react-native-webview";

const Read = ({navigation, route}) => {
    const [posts, setPosts] = useState([])
    console.log(`${HOST}/${route.params.post}`)

    useEffect(() => {
        fetch(`${HOST}/${route.params.post}`,{
          method:"GET",
          headers: {
            "Content-Type": "application/json",
          }
      })
      .then(resp => resp.json())
      .then(resp => setPosts(resp.description))
      .catch(error => console.log(error))
      },[])

      console.log(posts)  
    return(
        // <Text>{posts}</Text>
        <WebView source={{html: posts}} />
    )
}

export default Read
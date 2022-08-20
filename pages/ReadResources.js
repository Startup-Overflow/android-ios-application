import { useWindowDimensions, ScrollView, RefreshControl  } from "react-native";
import HOST from "../Hosts";
import React, { useEffect,useState } from "react";
import RenderHTML from "react-native-render-html";
import { Text as MaterialText } from "@react-native-material/core";

const ReadResources = (props) => {
    const url = HOST+"/"+props.route.params.post

    console.log(url)

    const [posts, setPosts] = useState({'title':'Please wait..', 'desc':'Page is loading...'})
    const { width } = useWindowDimensions();
    const [refresh, setRefresh] = useState(false)

    const pullMe = () => {
        setRefresh(true)

        setTimeout(()=>{
            setRefresh(false)
        }, 4000)
    }

    useEffect(() => {
        fetch(`${url}`,{
          method:"GET",
          headers: {
            "Content-Type": "application/json",
          }
      })
      .then(resp => resp.json())
      .then(resp => setPosts(resp))
      .catch(error => console.log(error))
      },[])
      
      const html = `${posts["desc"]}`
      console.log(posts)

    return(
        <ScrollView 
            refreshControl={<RefreshControl refreshing={refresh} onRefresh={()=>pullMe()}/>}
        >
            {/* <MaterialText variant="h5" style={{paddingBottom:20}}>{posts.title}</MaterialText> */}

            <RenderHTML 
                contentWidth={width} 
                source={{ html }} 
                tagsStyles={{a: {color:'#58585A',textDecorationLine:'none', fontSize:16, fontFamily:'Montserrat-Bold',lineHeight: 23},
                            p:{fontFamily:'Montserrat-Regular**',lineHeight: 23,color:'#58585A',fontSize:16,marginBottom:16}, 
                            li:{fontFamily:'Montserrat-Regular**',lineHeight: 23,color:'#58585A',fontSize:16,marginBottom:16}, 
                            }} 
            />
        </ScrollView>
    )
}

export default ReadResources
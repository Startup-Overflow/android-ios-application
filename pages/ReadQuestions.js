import { Text, useWindowDimensions, ScrollView, Image, TextInput, View, StyleSheet, RefreshControl  } from "react-native";
import HOST from "../Hosts";
import React, { useEffect,useState } from "react";
// import WebView from "react-native-webview";
import RenderHTML from "react-native-render-html";
import { Text as MaterialText } from "@react-native-material/core";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import style from "../Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ListItem } from "@react-native-material/core";
import Fontisto from 'react-native-vector-icons/Fontisto'

const Tab = createBottomTabNavigator();

var url = ''
var id = ''

var type=''

const Comment = (props) => {
    return (
        <ListItem
            title={props.username}
            secondaryText={props.comment}
        />            
    )
}

const Article = (props) => {
    const [posts, setPosts] = useState({'title':'Please wait..', 'desc':'Page is loading...'})
    const [answers, setAnswers] = useState([{}])
    const { width } = useWindowDimensions();
    const [refresh, setRefresh] = useState(false)

    const pullMe = () => {
        setRefresh(true)

        setTimeout(()=>{
            setRefresh(false)
        }, 4000)
    }
    console.log(url)
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

      console.log(`${HOST}/questions/answer/${posts.id}`)

    useEffect(()=>{
        fetch(`${HOST}/questions/answer/${posts.id}`, {
            method:"GET",
            headers: {
              "Content-Type": "application/json",
            }  
        })
        .then(resp => resp.json())
        .then(resp => setAnswers(resp))
        .catch(error => console.log(error))
        },[])

        console.log(answers)
  

    //   useEffect(() => {
    //     fetch(`${HOST}/posts/commentview/${id}`,{
    //       method:"GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //       }
    //   })
    //   .then(resp => resp.json())
    //   .then(resp => setALlComments(resp))
    //   .catch(error => console.log(error))
    //   },[])

      
      const html = `${posts["desc"]}`

    return(
        // <Text>
        //     {posts.title}
        // </Text>
        <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={()=>pullMe()}/>}>
            <MaterialText variant="h5" style={{paddingBottom:20}}>{posts.title}</MaterialText>
            {
                type=='resources'?'':
                    <Text>Asked By: {posts.username+"\n"}
                    {/* on: {posts.post_date+"\n"}
                    at: {posts.post_time+"\n"} */}
                    </Text>
            }

            <RenderHTML 
                contentWidth={width} 
                source={{ html }} 
                tagsStyles={{a: {color:'#58585A',textDecorationLine:'none', fontSize:16, fontFamily:'Montserrat-Bold',lineHeight: 23},
                            p:{fontFamily:'Montserrat-Regular**',lineHeight: 23,color:'#58585A',fontSize:16,marginBottom:16}, 
                            li:{fontFamily:'Montserrat-Regular**',lineHeight: 23,color:'#58585A',fontSize:16,marginBottom:16}, 
                            }} 
            />
        {/* <View style={{flexDirection: "row", paddingTop: 30}}>
            <Text>{posts.like}</Text>
            <Fontisto.Button 
                style={styles.like} 
                color="#000000" 
                size={17} 
                name="like"
                onPress={() => like()}
            />
            <Text>{posts.unlike}</Text>
            <Fontisto.Button 
                style={styles.like} 
                color="#000000" 
                size={17} 
                name="dislike"
                onPress={() => unlike()}
            /> */}
            {/* </View> */}
            <MaterialText variant="h5" style={{margin: 20}}>Answers</MaterialText>
            {answers.map((e)=> <Comment id={e.id} key={e.id} comment={e.desc} username={e.username}/>)}
        </ScrollView>
    )
}

const ReadQuestions = (props) => {

    const [addComment, setComment] = useState()
    url = HOST+"/"+props.route.params.post
    const { width } = useWindowDimensions();

    const submit = async (e) => {
        
        const token = await AsyncStorage.getItem("token");  

        console.log("Sending Request...")
        const response = await fetch(`${HOST}/posts/comment/`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body:JSON.stringify({
                addComment,
                id
            })
        })

        console.log("Got Response...")
        const content = await response.json()
        console.log(content)
    }

    return(
        <Tab.Navigator>
        <Tab.Screen name="Article" 
            component={Article} 
            options={{
                title: '',
                tabBarLabel: () => 
                    <View style={{flexDirection: "row", padding: 10}}>
                        <TextInput 
                            placeholder="Add a comment..." 
                            style={{borderColor: 'black', borderWidth:1, borderRadius: 8, width: width-80 }}
                            onChangeText={e => setComment(e)}
                        />
                        <MaterialCommunityIcons.Button 
                            style={[style.icon, {borderLeftWidth: 10, borderLeftColor: 'white'}]} 
                            color="#000000" 
                            size={35} 
                            name="send"
                            onPress={(e) => submit(e)}
                        />
                    </View>,
                headerShown: false,
                tabBarLabelPosition: 'left',
                tabBarStyle: { height: 60 },
            }}
        />
    </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    like:{
        backgroundColor: "white",
        position:'relative'
    }
})

export default ReadQuestions
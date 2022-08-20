import React from "react";
import { Text, View, Button } from "react-native";
import { ListItem, Avatar, Text as MaterialText } from "@react-native-material/core";
import HOST from "../Hosts";
import { ScrollView } from "react-native-gesture-handler";

function Investor(props){
    return(
        <View style={{marginBottom:10, paddingBottom:10}} >
        <ListItem
            leadingMode="avatar"
            leading={
                <Avatar image={{ uri: HOST+props.attachment }} size={50} />
            }
            title= "Ujjwal Kar"
            secondaryText={
                <View>
                    <Text>Hello World</Text>
                    <View>
                    <Button 
                        style={{textAlign: 'right'}} 
                        title="Message"
                        onPress={() => props.navigation.navigate({
                            name:'Read',
                            params: {post: 'posts/views/'+props.id, ids: props.id, type: "posts"}
                        })}
                    />
                    </View>
                </View>                
            }
        />
    </View>
    )
}

const Investors = (props) => {
    return (
        <ScrollView>
            <MaterialText 
                variant="h6" 
                style={{
                    backgroundColor:'#636e72',
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '600',
                    padding: 5,
                }}>
                    Investors
            </MaterialText>
            <Investor/>
        </ScrollView>
    )
}    

export default Investors;
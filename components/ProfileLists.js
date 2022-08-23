import React from "react";
import { View, Text, Button } from "react-native";
import { useWindowDimensions } from "react-native";
import { ListItem, Avatar } from "@react-native-material/core";

function ProfileLists({name, desc, img, id, navigation}){
    const { width } = useWindowDimensions();

    return(
        <View>
        <ListItem
            leadingMode="avatar"
            leading={
                <Avatar image={{ uri: img }} size={50} />
            }
            title= {name}
            secondaryText={
                <View >
                    {/* <View style={{}}> */}
                    <Text>{desc}</Text>
                    {/* </View> */}
                    <Button 
                        // style={{textAlign: 'right'}} 
                        title="View Profile"
                        onPress={() => props.navigation.navigate({
                            name:'Read',
                            params: {post: 'posts/views/'+props.id, ids: props.id, type: "posts"}
                        })}
                    />
                </View>                
            }
        />
    </View>
    )
}

export default ProfileLists
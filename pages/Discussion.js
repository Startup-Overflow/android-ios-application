import React from "react";
import { View } from "react-native";
import { ListItem } from "@react-native-material/core";
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Discussion = () => {
    return (
        <View>
            <ListItem
            title="Inbox"
            leading={<EvilIcons name="question" size={24} />}
            // trailing={props => <EvilIcons name="chevron-right" {...props} />}
            />
        </View>
    )
}

export default Discussion;
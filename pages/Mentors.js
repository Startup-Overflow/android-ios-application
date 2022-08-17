import React from "react";
import { Text } from "react-native";
const Mentors = ({navigation, route}) => {
    return (
        <Text>
            {route.params.post}
            Mentors
        </Text>
    )
}

export default Mentors;
import React from "react";
import { Text } from "@react-native-material/core";

export default function Header({children}) {
    return (
        <Text 
        variant="h6" 
        style={{
            backgroundColor:'#636e72',
            color: 'white',
            fontSize: 18,
            fontWeight: '600',
            padding: 5,
        }}>
            {children}
        </Text>
    )
}
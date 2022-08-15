import React from "react";
import { View, Button } from "react-native";
import style from "../Styles";

const HeaderIcons = () => {
    return(
        <View style={style.row}>
            <Button
                onPress={() => alert('This is a button!')}
                title="Infdo"
                color="#000000"
            />
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000000"
            />
        </View>
    )
}

export default HeaderIcons;
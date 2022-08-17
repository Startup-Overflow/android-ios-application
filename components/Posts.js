import { View } from "react-native";
import { ListItem, Avatar } from "@react-native-material/core";


const Posts = () => {
    return (
        <View>
                <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    />

        </View>
    )
}
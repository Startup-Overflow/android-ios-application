import React, { useCallback } from "react";
import { Alert, Text, Linking, StyleSheet, View } from "react-native";

// const supportedURL = "https://google.com";

// const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Text onPress={handlePress}>{children}</Text>;
};

// const App = () => {
//     return (
//       <View>
//         <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
//         <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
//       </View>
//     );
//   };
  
  
export default OpenURLButton;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FeedScreen</Text>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2d3436',
  },
});

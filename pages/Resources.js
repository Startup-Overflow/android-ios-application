// import React from "react";
// import { View, Button, Text } from "react-native";
// // import style from "../Styles";
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

const Resources = ({navigation}) => {
  const items = [
    { name: 'How to start a Business ?', code: '#2abc8c', page:'resources', id:1 },
    { name: 'Startup Kit', code: '#2ecc71', page:'resources', id:2 },
    { name: 'Startup Guidebook', code: '#3498db', page:'resources', id:3 },
    { name: 'Get Recognized', code: '#8e44ad', page:'resources', id:4 },
    { name: 'Funding Guide', code: '#9b59b6', page:'resources', id:5 },
    { name: 'Startup Challanges', code: '#34495e', page:'resources', id:8 },
    { name: 'Market Research Report', code: '#d35400', page:'resources', id:6 },
    { name: 'Patent your business plan', code: '#27ae60', page:'resources', id:7 },
    { name: 'Online Courses', code: '#2980b9', page:'resources', id:2 },

    { name: 'Woman in Business', code: '#2980b9', page:'resources', id:9  },
    { name: 'Story of a CEO', code: '#8e44ad', page:'categories', id:14 },
    { name: 'Nari Shakti', code: '#2c3e50', page:'resources' ,id:10  },

    { name: 'Advertisement', code: '#e67e22', page:'categories', id:15 },
    { name: 'Branding & Marketing', code: '#e74c3c', page:'categories', id:16 },

  ];

  return (
    <SectionGrid
      itemDimension={100}
      sections={[
        {
          title: 'Start a Business',
          data: items.slice(0, 9),
        },
        {
          title: 'Woman Entrepreneurship',
          data: items.slice(9, 12),
        },
        {
          title: 'Grow Your Business',
          data: items.slice(12, 14),
        },
    ]}
      style={styles.gridView}
      renderItem={({ item }) => (
        <View key={item.id} id={item.id} style={[styles.itemContainer, { backgroundColor: item.code }]} onPress={() => console.log("hello")}>
          {item.page=='resources'?
            <Text style={styles.itemName}  onPress={() => navigation.navigate({
                          name:'ReadResources',
                          params: {post: "resources/"+item.id }
                        })}>{item.name}</Text>
          :<Text style={styles.itemName}  onPress={() => navigation.navigate({
                          name:'SBlog',
                          params: {post: "categories/"+item.id }
                        })}>{item.name}</Text>

          }
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 75,
    textAlign: 'center'
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});


export default Resources;
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import { ListItem, Avatar } from '@react-native-material/core';
import { ScrollView } from 'react-native-gesture-handler';

const Woman = ({navigation}) => {
  const items = [
    { name: 'Woman in Business', code: '#ff704d', page:'resources', id:9  },
    { name: 'Story of a CEO', code: '#ff5c33', page:'categories', id:14 },
    { name: 'Nari Shakti', code: '#ff471a', page:'resources' ,id:10  },
  ];

  return (
    <SectionGrid
      itemDimension={300}
      sections={[
        {
          data: items.slice(0, 3),
        }
    ]}
      style={styles.gridView}
      renderItem={({ item }) => (
        <View key={item.id} id={item.id} style={[styles.itemContainer, { backgroundColor: item.code }]} onPress={() => console.log("hello")}>
          {item.page=='resources'?
            <Text style={[styles.itemName, {fontSize: 40, fontFamily:'BoldItalic', fontWeight: 'bold',}]}  onPress={() => navigation.navigate({
                          name:'ReadResources',
                          params: {post: "resources/"+item.id }
                        })}>{item.name}</Text>
          :<Text style={[styles.itemName,{fontSize: 40, fontFamily:'BoldItalic', fontWeight: 'bold',}]}  onPress={() => navigation.navigate({
                          name:'SBlog',
                          params: {post: "categories/"+item.id }
                        })}>{item.name}</Text>

          }
        </View>
      )}
    //   renderSectionHeader={({ section }) => (
    //     <Text style={styles.sectionHeader}>{section.title}</Text>
    //   )}
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
    margin: 20,
    height: 160,
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


export default Woman;
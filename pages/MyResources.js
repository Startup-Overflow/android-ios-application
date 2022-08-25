import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SectionGrid } from 'react-native-super-grid';
import style from '../Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Resources = ({navigation}) => {  
  const items = [
    { name: 'Do you have a business plan?', code: 'maroon', page:'Mentors', id:1, api:'resources' },
    { name: 'How to Start a Business', code: 'red', page:'Resources', id:2, api:'resources' },
    { name: 'Success and Failure Stories of a Startup', code: 'orange', page:'SBlog', id:14, api:'categories' },
    { name: 'Woman Entrepreniurship', code: 'gold', page:'Woman', api:'hati', id:4 },
  ];

  return (
    <SectionGrid
      itemDimension={125}
      sections={[
        {
          data: items.slice(0, 4),
        },
    ]}
      style={styles.gridView}
      renderItem={({ item }) => (
        <View key={item.id} id={item.id} style={[styles.itemContainer, { backgroundColor: item.code }]} onPress={() => console.log("hello")}>
          {/* {item.page=='resources'? */}
            <Text style={styles.itemName}  onPress={() => navigation.navigate({
              name: item.page,
              params: {post: item.api+"/"+item.id }
            })}>{item.name}</Text>
          {/* :<Text style={styles.itemName}  onPress={() => navigation.navigate({
                          name:'SBlog',
                          params: {post: "categories/"+item.id }
                        })}>{item.name}</Text> */}

          {/* } */}
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={{marginBottom:40, marginTop:80}}>
          {/* <TextInput style={styles.input} placeholder="   Search..."></TextInput> */}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    margin: 5
    // padding: 8
  },
  input:{
    flex: 0,
    borderColor: "#cccccc",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    // paddingLeft: 15,
    marginBottom: 0,
    flexDirection: "column"
  },
  
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 150,
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
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, RefreshControl } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import HOST from "../Hosts";

const Learn = (props) => {
  const [learn, setLearn] = useState([{'name':'loading...', 'id':0}])
  // console.log(props.route.params)
  useEffect(() => {
    fetch(`${HOST}/categories`,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
      }
  })
  .then(resp => resp.json())
  .then(resp => setLearn(resp))
  .catch(error => console.log(error))
  },[])

    return( 
        <SectionGrid
          itemDimension={100}
          sections={[
            {
              data: learn
            },
          ]}
          style={styles.gridView}
          renderItem={({ item }) => (
            <View>
              {item.id==0? <Text>Loading...</Text>:
                <View style={[styles.itemContainer, { backgroundColor: 'black' }]} >
                  <Text style={styles.itemName} onPress={() => props.navigation.navigate({
                    name:'SBlog',
                    params: {post: "categories/"+item.id}
                  })}>
                    {item.name}
                  </Text>
                </View>
              }
            </View>
          )}
          // renderSectionHeader={({ section }) => (
          //   <Text style={styles.sectionHeader}>{section.title}</Text>
          // )}
      />
    )
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

export default Learn;
import React from "react";
import { ScrollView, StyleSheet, View, Linking, SafeAreaView, FlatList } from "react-native";
import { ListItem, Avatar, Text } from "@react-native-material/core";
import { SectionGrid } from 'react-native-super-grid';
import OpenURL from "../components/OpenURL";

// const Business = () => {

// }

const BusinessIdeas = ({navigation}) => {
  // const items = [
  //   { name: 'How to got Patent on business plan ?', code: '#2abc8c', id:11, url:'startupoverflow.netlify.app' },
  //   { name: 'Why Patent is important?', code: '#2ecc71', id:12, url:'startupoverflow.netlify.app' },
  //   { name: 'List of Patent facilator', code: '#3498db', id: 0, url:'https://ipindia.gov.in/writereaddata/Portal/Images/pdf/List_of_Facilitators_for_Patents__Designs_and_Trademarks_under_SIPP_Scheme-_newly_added_on_18-02-2020_Patents_NEW.pdf' },
  //   { name: 'FAQ', code: '#8e44ad', id: 0, url:'https://www.startupindia.gov.in/content/sih/en/facilitator.html' },
  // ];

  return(
    <ScrollView>
    {/* <SectionGrid
    itemDimension={90}
    sections={[
      {
        title: 'Patent a Business Plan',
        data: items.slice(0, 5),
      },
      {
        title: 'Lists of Patent Business Plans',
      },
    ]}
    style={styles.gridView}
    renderItem={({ item }) => (
      <View key={item.id} id={item.id} style={[styles.itemContainer, { backgroundColor: item.code }]} onPress={() => console.log("hello")}>
        {item.id==0? 
          <Text style={styles.itemName} onPress={()=> Linking.openURL(item.url)}>{item.name}</Text> 
        :
        <Text style={styles.itemName}  onPress={() => navigation.navigate({
          name:'ReadResources',
          params: {post: "resources/"+item.id }
        })}>{item.name}</Text>
        }
    </View>
      // <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
      //   <Text style={styles.itemName}>{item.name}</Text>
      // </View>
    )}
    renderSectionHeader={({ section }) => (
      <Text style={styles.sectionHeader}>{section.title}</Text>
    )}
  /> */}
<ListItem
      // leadingMode="avatar"
      // leading={
      //   <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      // }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    />
    {/* <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    /> */}
 
 {/* <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    /> */}
    {/* <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    /> */}
    {/* <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    /> */}
    <ListItem
      // leadingMode="avatar"
      // leading={
      //   <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      // }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    />
    <ListItem
      // leadingMode="avatar"
      // leading={
      //   <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      // }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    />

    <ListItem
      title="More >>"
    />
  </ScrollView>
  )
  // return (
        // <Business/>
      // </ScrollView>
      // <ScrollView>            
      //     <ListItem
      //       leadingMode="avatar"
      //       leading={
      //         <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      //       }
      //       title="Brunch this weekend?"
      //       secondaryText="I'll be in your neighborhood doing errands this…"
      //     />
      //     </ScrollView>
      
      //   </ScrollView>
    // )
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
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
})

export default BusinessIdeas;
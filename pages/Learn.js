import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

const Learn = () => {
    const items = [
        { name: 'How to start a Business ?', code: '#2abc8c' },
        { name: 'Startup Kit', code: '#2ecc71' },
        { name: 'Startup Guidebook', code: '#3498db' },
        { name: 'Get Recognized', code: '#8e44ad' },
        { name: 'Funding Guide', code: '#9b59b6' },
        { name: 'Startup Challanges', code: '#34495e' },
        { name: 'Market Research Report', code: '#d35400' },
        { name: 'Patent your business plan', code: '#27ae60' },
        { name: 'Online Courses', code: '#2980b9' },
    
        { name: 'Woman in Business', code: '#2980b9' },
        { name: 'Story of a CEO', code: '#8e44ad' },
        { name: 'Nari Shakti', code: '#2c3e50' },
    
        { name: 'Advertisement', code: '#e67e22' },
        { name: 'Branding & Marketing', code: '#e74c3c' },
        { name: 'CONCRETE', code: '#95a5a6' },
    ];

    return(
        <SectionGrid
        itemDimension={100}
        sections={[
          {
            // title: 'Start a Business',
            data: items.slice(0, 9),
          },
        //   {
        //     title: 'Woman Entrepreneurship',
        //     data: items.slice(9, 12),
        //   },
        //   {
        //     title: 'Grow Your Business',
        //     data: items.slice(12, 14),
        //   },
          // {
          //     title: 'Scheme and Policies',
          //     data: items.slice(12, 20),
          // },
      ]}
        style={styles.gridView}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
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
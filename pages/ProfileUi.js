import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Avatar } from '@react-native-material/core/';

function ProfileUi(props){
    return(
        <View style={style.profcontainer}>
        <View style={style.box}>
            <Avatar style={style.imgbox} image={ props.imgUrl } />
            <Text variant="h2" style={style.imgbox} >{ props.name }</Text>
            <Text variant="h3" style={style.imgbox}>{ props.designation }</Text>
        </View>
        </View>
    );
}

const style = StyleSheet.create({
    box: {
        // background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%),
        borderRadius: 5,
        color:'white',
        padding: 0,
        height: 190,
        width: 250,
        // box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3),
        alignItem:'center'
        // transition: 0.3s;
    },
    boxhover: {
        // background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
        borderRadius: 5,
        color:'white',
        height: 250,
        width: 250,
        // box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    },
    imgbox: {
        height: 190,
        width: 190,
        top:-80,
        // object-fit: cover;
        borderRadius: 6,
        /* border: 1px solid black;  */
        // box-shadow: 0 3px 5px 2px rgba(255, 142, 164, 0.3);
        position: 'relative',
        backgroundColor: 'white',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    profcontainer: {
        margin: 10,
        // width: fit-content;
        paddingTop: 80
        
    },
    name: {
        marginTop: -75,
        fontSize: 27,
        /* font-size: x-large; */
        // text-transform: uppercase;
    },
    des: {
        marginTop: -24,
        fontSize: 20,
        // text-transform: uppercase;
        // color: rgba(255, 255, 255, 0.7),
    }
    })


export default ProfileUi;
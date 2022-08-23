import React from "react";
import { Text, View, Button, useWindowDimensions } from "react-native";
import { ListItem, Avatar, Text as MaterialText } from "@react-native-material/core";
import HOST from "../Hosts";
import { ScrollView } from "react-native-gesture-handler";
import ProfileLists from '../components/ProfileLists'

const Mentors = (props) => {
    return (
        <ScrollView>
            <MaterialText 
                variant="h6" 
                style={{
                    backgroundColor:'#636e72',
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '600',
                    padding: 5,
                }}>
            </MaterialText>
            <ProfileLists name="Brajesh Maheshwari" desc="Co-Founder Director of Allen Career Institute"  img="https://startupoverflowweb.netlify.app/static/media/Brajesh_Maheshwari.bb5b0fb8832b1c4849eb.jpg" id="1"/>
            <ProfileLists name="Vinay Kumar Reddy Nuvvuru" desc="Founder & Chairman of Indian Academy of Competitive Exams"  img="https://startupoverflowweb.netlify.app/static/media/Vinay-kumar-reddy.4e0e3f5d0d3f5e461005.jpg" id="2"/>
            <ProfileLists name="Dr P Prasant" desc="Speaker, Educator and Administrator in teaching Cyber Security IT, Computer Applications, and Management Courses"  img="https://startupoverflowweb.netlify.app/static/media/Dr%20P%20Prasant.271d836b02162ad51630.jpg" id="3"/>
            <ProfileLists name="Dr Chandan Agarwal" desc="Chairperson of G.D. Goenka School, Kanpur & Bareilly"  img="https://startupoverflowweb.netlify.app/static/media/Chandan_Aggarwal.2b628be7ea20068eab61.jpg" id="4"/>
            <ProfileLists name="Dhana Durga" desc="Founder and Principal, Sree Vivekananda Educational Society"  img="https://startupoverflowweb.netlify.app/static/media/Dhana-Durga.9c8d4c6089d896d8c91b.jpeg" id="5"/>
            <ProfileLists name="Karan Shah" desc="Founder & CEO of IIDE of India's Leading Digital Marketing Edtech"  img="https://startupoverflowweb.netlify.app/static/media/Karan%20Shah.5abc9dff7e92607b7571.jpg" id="6"/>
        </ScrollView>
    )
}    

export default Mentors;
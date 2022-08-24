import React from "react";
import { Text, View, Button, ScrollView } from "react-native";
import { ListItem, Avatar, Text as MaterialText } from "@react-native-material/core";
import HOST from "../Hosts";
import ProfileLists from '../components/ProfileLists';

const Incubators = (props) => {
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
                    Find incubators in your region that can support your startup's growth...
            </MaterialText>
            <ProfileLists name="Annamalai Innovation and incubation research foundation" desc="Cuddalore, Tamil Nadu" img="https://api.startupindia.gov.in/sih/api/file/user/image/Incubator?fileName=4cd2c5bc-1e16-4797-a4c6-cd31003688fb.png" btnTitle="Apply for Incubators" id="1"/>
            <ProfileLists name="YCCE TBI Foundation"  desc="Nagpur, Maharashtra" img="https://api.startupindia.gov.in/sih/api/file/user/image/Incubator?fileName=1cdb7da3-3a5e-4265-a210-40cbbad8a571.jpg" btnTitle="Apply for Incubators" id="2"/>
            <ProfileLists name="CIPET CTEF INNOVEX" desc="Bhuvaneswar, Odisha"  img="https://api.startupindia.gov.in/sih/api/file/user/image/Incubator?fileName=25806671-94a1-4308-a44d-1f3c28b7bd66.jpeg" btnTitle="Apply for Incubators" id="3"/>
            <ProfileLists name="Centre for Innovation and Entrepreneurship Development at IIITS (CIEDI)" desc="Tirupati, Andhra Pradesh"  img="https://api.startupindia.gov.in/sih/api/file/user/image/Incubator?fileName=950d69ad-6cc0-42a0-a4a0-0f860f8a1aa0.JPG" btnTitle="Apply for Incubators" id="4"/>
            <ProfileLists name="Research and Innovation Circle of Hyderabad" desc="Hyderabad, Telangana"  img="https://api.startupindia.gov.in/sih/api/file/user/image/Incubator?fileName=57194789-eaa5-422f-8a17-8e5f526be67a.jpeg" btnTitle="Apply for Incubators" id="5"/>
            <ProfileLists name="VentureStudio" desc="Ahmedabad, Gujarat"  img="https://api.startupindia.gov.in/sih/api/file/user/image/Incubator?fileName=989777d8-7279-42f6-9fc9-efa6a9f2f313.jpg" btnTitle="Apply for Incubators" id="6"/>
        </ScrollView>
    )
}    

export default Incubators;
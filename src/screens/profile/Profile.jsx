import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import gStyle from "../styles/globalStyle";
import ProfileAvatar from "./components/ProfileAvatar";
import ProfileModify from "./components/ProfileModify";
import ProfileCounter from "./components/ProfileCounter";
import MockData from "./MockData";
import ProfileInfo from "./components/ProfileInfo";

export default function Profile({navigation}) {
    return (
        <View style={gStyle.fullWidth}>
            <ProfileAvatar/>
            <ProfileModify isMyFriend={true} isMyProfile={false}/>
            <ProfileCounter infos={MockData.profileCounter}/>
            <ProfileInfo details={MockData.profileDetail}/>
        </View>
    );
};




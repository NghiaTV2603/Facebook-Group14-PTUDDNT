import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import gStyle from "../styles/globalStyle";
import ProfileAvatar from "./components/ProfileAvatar";

export default function Profile({navigation}) {
    return (
        <View style={gStyle.fullWidth}>
            <ProfileAvatar/>

        </View>
    );
};




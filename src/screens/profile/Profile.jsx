import * as React from "react";
import {ScrollView, Text, View} from "react-native";
import gStyle from "../../styles/globalStyle";
import ProfileAvatar from "./components/ProfileAvatar";
import ProfileModify from "./components/ProfileModify"; import ProfileCounter from "./components/ProfileCounter";
import MockData from "./MockData";
import ProfileInfo from "./components/ProfileInfo";
import AddPost from "../NewFeed/components/AddPost";
import Post from "../components/Post";
import {useDispatch, useSelector} from "react-redux";
import {newFeedSelector, postNewFeedSelector, userSeletor} from "../../app/selector";
import {Divider} from "@rneui/base";
import {getUserInfo} from "./userThunk";
import {useEffect} from "react";

export default function Profile({navigation}) {
    const data = useSelector(newFeedSelector);
    const userData = useSelector(userSeletor);

    return (
        <View style={gStyle.fullWidth}>
            <ScrollView>
                <ProfileAvatar/>
                <ProfileModify isMyFriend={true} isMyProfile={false}/>
                <ProfileCounter infos={MockData.profileCounter}/>
                <ProfileInfo/>
                <Divider width={1} color={"#EEEEEE"}/>
                <AddPost />
                <Divider width={1} color={"#EEEEEE"} style={{marginBottom :  15}}/>
                {
                    data.map(element => <Post dataPost={element}/>)
                }
                <Text>
                    {
                        JSON.stringify(userData)
                    }
                </Text>
            </ScrollView>
        </View>
    );
};




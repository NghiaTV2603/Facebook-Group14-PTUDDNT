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

export default function Profile({navigation, showPost}) {
    const data = useSelector(newFeedSelector);
    const userData = useSelector(userSeletor);

    return (
        <View style={gStyle.fullWidth}>
            <ScrollView>
                <ProfileAvatar/>
                {
                    !showPost && <ProfileModify isMyFriend={userData.friendStatus === "note_friend" ? false : true} isMyProfile={userData.friendStatus === "profile"}/>
                }
                <ProfileCounter infos={MockData.profileCounter}/>
                <ProfileInfo/>
                <Divider width={1} color={"#EEEEEE"}/>
                {
                    !showPost && <AddPost/>
                }
                {

                    !showPost && <Divider width={1} color={"#EEEEEE"} style={{marginBottom :  15}}/>
                }
                {
                    !showPost && data.map((element, index) => <Post key={"PROFILE_" + index} dataPost={element}/>)
                }
            </ScrollView>
        </View>
    );
};




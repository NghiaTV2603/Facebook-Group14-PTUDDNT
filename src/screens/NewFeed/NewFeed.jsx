import * as React from "react";
import {Text, View} from "react-native";
import {Divider} from "@rneui/base";
import Post from "../components/Post";
import {ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import AddPost from "./components/AddPost";
import {newFeedSelector, postNewFeedSelector} from "../../app/selector";


export default function newFeed() {
    const posts = useSelector(newFeedSelector);
    return (
        <ScrollView style={{width: "100%"}}>
            <View>
                <AddPost/>
                <Divider
                    style={{marginBottom: 16, backgroundColor: "#DCDCDC", height: 1}}
                />
                {posts.map((post, index) => (
                    <View key={index} key={"POST_" + index}>
                        <Post dataPost={post}/>
                        <Divider
                            style={{
                                marginBottom: 8,
                                marginTop: 8,
                                backgroundColor: "#DCDCDC",
                                height: 1,
                            }}
                        />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

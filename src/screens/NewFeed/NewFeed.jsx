import * as React from "react";
import { Text, View } from "react-native";
import { Divider } from "@rneui/base";
import AddPost from "../NewFeed/components/AddPost";
import Post from "../components/Post";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {postNewFeedSelector} from "../../app/selector";

export default function NewFeed() {
  const posts = useSelector(postNewFeedSelector);
  return (
    <ScrollView style={{ width: "100%" }}>
      <View>
        <AddPost />
        <Divider
          style={{ marginBottom: 16, backgroundColor: "#DCDCDC", height: 1 }}
        />
        {posts.map((post, index) => (
          <View key={index}>
            <Post dataPost={post} />
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

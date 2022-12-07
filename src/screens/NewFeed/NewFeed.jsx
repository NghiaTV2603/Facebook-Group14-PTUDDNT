import * as React from "react";
import { Text, View } from "react-native";
import { Divider } from "@rneui/base";
import AddPost from "../newFeed/components/AddPost";
import Post from "../components/Post";
import { ScrollView } from "react-native";

export default function NewFeed({ navigation }) {
  return (
    <ScrollView style={{width:'100%'}}>
      <View>
        <AddPost />
        <Divider
          style={{ marginBottom: 16, backgroundColor: "#DCDCDC", height: 1 }}
        />
        <Post />
        <Divider
          style={{
            marginBottom: 8,
            marginTop: 8,
            backgroundColor: "#DCDCDC",
            height: 1,
          }}
        />
        <Post />
      </View>
    </ScrollView>
  );
}

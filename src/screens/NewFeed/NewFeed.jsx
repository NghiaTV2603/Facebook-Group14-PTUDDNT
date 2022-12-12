import * as React from "react";
import { Text, View } from "react-native";
import { Divider } from "@rneui/base";
import Post from "../components/Post";
import { ScrollView } from "react-native";
import AddPost from "./components/AddPost";

export default function NewFeed({ navigation }) {
  const posts = [
    {
      user: "Thierry Henry",
      avatar:
        "https://i.guim.co.uk/img/media/21f4eb902cc4fe56dd2378adb83d4eef49b0fbe6/0_0_4966_2979/master/4966.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d81de456b25007c739555f1e064bab5f",
      date: "20 nov",
      caption: "Messiiii ",
      like: 16000 ,
      comment: "345",
      content:
        "https://cdnmedia.baotintuc.vn/Upload/c2tvplmdloSDblsn03qN2Q/files/2022/12/04/VDH/Messi-world-cup-2022-argentina-4122022.jpg",
    },
    {
      user: "Neymar JR",
      avatar:
        "https://neymar2022.football/wp-content/uploads/2022/12/BRAZIL-4-1-korea-4.jpg",
      date: "20 nov",
      caption: "Fierce battle ... ",
      like: 166010,
      comment: "1345",
      content:
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta6d3c1124fa3ed25/60dbf60f454f930f33f6720a/5916b0bbf9d26509a25a7f16b0bc4841dc405175.jpg",
    },
    {
      user: "Mesut Ozil",
      avatar:
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc3f9d5b7b6c4ea65/60dd409393730d0ef600f1e0/5bcb15b961ee67f1d73f90606f091992776cb2a7.jpg",
      date: "20 nov",
      caption: "We will fight to the end.  ",
      like: 112000,
      comment: "545",
      content:
        "https://prod.static9.net.au/fs/c6280c7c-d302-4664-bd9b-30fef84ba2b2",
    },
  ];
  return (
    <ScrollView style={{ width: "100%" }}>
      <View>
        <AddPost />
        <Divider
          style={{ marginBottom: 16, backgroundColor: "#DCDCDC", height: 1 }}
        />
        {posts.map((post, index) => (
          <View key={index}>
            <Post data={post} />
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

import { View, Text, StyleSheet, Image } from "react-native";
import { Avatar } from "@rneui/themed";
import { Divider } from "@rneui/base";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default function Post(post) {
  return (
    <View
      style={{
        backgroundColor: "#F5F5F5",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: 80,
          alignItems: "center",
          paddingLeft: 12,
        }}
      >
        <Avatar size={60} rounded source={{ uri: post.data.avatar }} />
        <View style={{ flexDirection: "column", marginLeft: 8 }}>
          <Text style={styles.titleText}>{post.data.user}</Text>
          <Text> {post.data.date} .</Text>
        </View>
        <Ionicons
          name="ellipsis-vertical"
          style={{ fontSize: 24, marginLeft: 175 }}
        />
      </View>
      <Text
        style={{
          paddingLeft: 16,
          fontSize: 16,
          paddingBottom: 4,
        }}
      >
        {post.data.caption}
      </Text>
      <Image
        source={{
          uri: post.data.content,
        }}
        style={{ height: 300 }}
      />
      <View
        style={{
          marginTop: 8,
          height: 26,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <AntDesign
          name="like1"
          style={{ color: "blue", fontSize: 16, paddingLeft: 8 }}
        >
          <Text style={{ fontSize: 13 }}>{post.data.like}</Text>
        </AntDesign>
        <Text style={{ fontSize: 14, paddingRight: 8 }}>
          {post.data.comment} comments
        </Text>
      </View>
      <Divider
        style={{
          backgroundColor: "#DCDCDC",
          height: 0.5,
          width: "94%",
          marginLeft: 12,
        }}
      />
      <View
        style={{
          height: 55,
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 24,
        }}
      >
        <AntDesign
          name="like2"
          style={{ fontSize: 32, paddingRight: 8 }}
        ></AntDesign>
        <Text style={{ fontSize: 16 }}>Like</Text>
        <MaterialCommunityIcons
          name="comment-outline"
          style={{ fontSize: 32, marginLeft: 32, paddingRight: 8 }}
        />
        <Text style={{ fontSize: 16 }}>Comment</Text>
      </View>
    </View>
  );
}

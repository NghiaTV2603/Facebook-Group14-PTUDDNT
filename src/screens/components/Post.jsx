import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Avatar, Dialog } from "@rneui/themed";
import { Divider } from "@rneui/base";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BottomSheet, ListItem } from "@rneui/themed";
import { ScrollView } from "react-native";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  titleComment: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default function Post(post) {
  const [like, setLike] = React.useState(post.data.like);
  const [isLike, setIsLike] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const comments = [1,2,3,4,5,6,7,8,9,10]

  const handleLike = () => {
    if (isLike) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setIsLike(!isLike);
  };
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
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar size={60} rounded source={{ uri: post.data.avatar }} />
          <View style={{ flexDirection: "column", marginLeft: 8 }}>
            <Text style={styles.titleText}>{post.data.user}</Text>
            <Text> {post.data.date} .</Text>
          </View>
        </View>
        <Ionicons name="ellipsis-vertical" style={{ fontSize: 24 }} />
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
          style={{ color: "#1E90FF", fontSize: 16, paddingLeft: 8 }}
        >
          <Text style={{ fontSize: 13 }}>{like}</Text>
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
          name={isLike ? "like1" : "like2"}
          color={isLike ? "#1E90FF" : "black"}
          style={{ fontSize: 32, paddingRight: 8 }}
          onPress={handleLike}
        />
        <Text style={{ fontSize: 16, color: isLike ? "#1E90FF" : "black" }}>
          Like
        </Text>
        <MaterialCommunityIcons
          name="comment-outline"
          style={{ fontSize: 32, marginLeft: 64, paddingRight: 8 }}
          onPress={() => setIsVisible(true)}
        />
        <Text style={{ fontSize: 16 }}>Comment</Text>
      </View>

      {/* comments */}

      <BottomSheet
        onBackdropPress={() => {
          setIsVisible(!isVisible);
        }}
        modalProps={{}}
        isVisible={isVisible}
      >
        <ListItem>
          <View style={{ height: 400 }}>
          <ScrollView style={{ width: "100%" }}>
        {comments.map(()=>(
            <View
              style={{
                flexDirection: "row",
                width: 380,
                alignItems: "center",
                paddingLeft: 12,
                paddingBottom: 12,

              }}
            >
              <View style={{ flexDirection: "row"}}>
                <Avatar size={40} rounded source={{ uri: post.data.avatar }} />
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 8,
                    marginRight: 8,
                    backgroundColor: "#D3D3D3",
                    borderRadius: 8,
                    padding: 8,

                  }}
                >
                  <Text style={styles.titleComment}>{post.data.user}</Text>
                  <Text style={{marginRight:8}}> GOAT, Messi.... GOAT, Messi.... GOAT, Messi.... GOAT, Messi.... GOAT</Text>
                </View>
              </View>
            </View>   
        ))}
        </ScrollView>
          </View>
        </ListItem>

        <ListItem>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={{
                height: 40,
                margin: 12,
                borderWidth: 1,
                width: 300,
                borderRadius: 24,
                padding: 10,
                paddingLeft: 16,
              }}
              placeholder="Write a comment..."
            />
            <MaterialCommunityIcons
              name="send"
              color="#1877F2"
              style={{ fontSize: 32 }}
            ></MaterialCommunityIcons>
          </View>
        </ListItem>
      </BottomSheet>
    </View>
  );
}

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
  const [comment, onChangeComment] = React.useState();
  const [addComment, setAddComment] = React.useState(comments);
  const handleAddComment = ()=>{
    setAddComment()
  }
  console.log(comment)

  
  const newComment = {
    avatar:post.data.Avatar,
    comment:comment
  }
  const comments = [
    {
      avatar:
        "https://image.tienphong.vn/600x315/Uploaded/2022/zaugtn/2022_05_10/avatar-609.jpg",
      comment: "Nội dung có liên quan",
    },
    {
      avatar:
        "https://vcdn1-giaitri.vnecdn.net/2022/04/28/Avatar2JamesCameron-1651112439-5213-1651112580.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=hkDCL9zLv2Q3HB-EYkf6zQ",
      comment: "Avatar 2 hé lộ những thước phim đầu tiên",
    },
    {
      avatar:
        "https://vcdn1-thethao.vnecdn.net/2022/11/30/Untitled-8697-1669804562.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=3Qi2v17m7Fy_udZMXg_RPg",
      comment: "GOAT Messi",
    },
    {
      avatar:
        "https://cdn1.tuoitre.vn/zoom/600_315/2022/12/6/ronaldo-3-1670308112515303078038-crop-1670308130421159602441.jpg",
      comment: "Cổ động viên Bồ Đào Nha không muốn Ronaldo",
    },
    {
      avatar:
        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
      comment:
        "GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....",
    },
    {
      avatar:
        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
      comment:
        "GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....GOAT Messi ....",
    },
    {
      avatar:
        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
      comment: "GOAT Messi ....GOAT Messi ....GOAT Messi ....",
    },
    {
      avatar:
        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
      comment: "GOAT Messi ....GOAT Messi ....GOAT Messi ....",
    },
    {
      avatar:
        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
      comment: "GOAT Messi ....GOAT Messi ....GOAT Messi ....",
    },
    {
      avatar:
        "https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_09_23/messi-1482.jpeg",
      comment: "GOAT Messi ....GOAT Messi ....GOAT Messi ....",
    },
  ];

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
          <View style={{ height: 440 }}>
            <ScrollView style={{ width: "100%" }}>
              {comments.map((cmt) => (
                <View
                  style={{
                    flexDirection: "row",
                    width: 380,
                    alignItems: "center",
                    paddingLeft: 12,
                    paddingBottom: 12,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Avatar size={40} rounded source={{ uri: cmt.avatar }} />
                    <View
                      style={{
                        flexDirection: "column",
                        marginLeft: 8,
                        backgroundColor: "#D3D3D3",
                        borderRadius: 8,
                        padding: 8,
                        width: 320,
                      }}
                    >
                      <Text style={styles.titleComment}>{post.data.user}</Text>
                      <Text style={{ marginRight: 8 }}>{cmt.comment}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </ListItem>

        <ListItem>
          <View
            style={{ flexDirection: "row", alignItems: "center", height: 40 }}
          >
            <TextInput
              style={{
                height: 40,
                margin: 24,
                borderWidth: 1,
                width: 300,
                borderRadius: 24,
                padding: 10,
                paddingLeft: 16,
              }}
              placeholder="Write a comment..."
              onChange={onChangeComment}
              value={comment}
            />
            <MaterialCommunityIcons
              name="send"
              color="#1877F2"
              style={{ fontSize: 32 }}
              onPress={handleAddComment}
            ></MaterialCommunityIcons>
          </View>
        </ListItem>
      </BottomSheet>
    </View>
  );
}

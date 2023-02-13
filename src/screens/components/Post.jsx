import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {Avatar} from "@rneui/themed";
import {Divider} from "@rneui/base";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {BottomSheet} from "@rneui/themed";
import Comment from "./Comment";
import {BASE_SERVER_FILES} from "../../app/constants";
import Slideshow from "../share_components/ImageSlider";
import {useDispatch} from "react-redux";
import {getComment, likePost} from "./postThunk";
import postSlice from "./postSlice";

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

function getTimeDifference(timestamp) {
    const currentTime = new Date();
    const givenTime = new Date(timestamp);
    const timeDifference = currentTime - givenTime;

    if (timeDifference < 60 * 1000) {
        return `${Math.floor(timeDifference / 1000)} seconds ago`;
    } else if (timeDifference < 60 * 60 * 1000) {
        return `${Math.floor(timeDifference / (60 * 1000))} minutes ago`;
    } else if (timeDifference < 24 * 60 * 60 * 1000) {
        return `${Math.floor(timeDifference / (60 * 60 * 1000))} hours ago`;
    } else if (timeDifference < 7 * 24 * 60 * 60 * 1000) {
        return `${Math.floor(timeDifference / (24 * 60 * 60 * 1000))} days ago`;
    } else {
        return givenTime.toLocaleDateString();
    }
}

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 *  {
        id : author._id,
        user : author.username,
        avatar : author.avatar.fileName,
        date : updatedAt,
        caption : described,
        comment : countComments,
        likeNumber : like.length,
        imageContent : images,
        isLike : isLike
 *  }
 */
export default function Post(props) {
    const post = props.dataPost
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = React.useState(false);
    const handleLike = () => {
        console.log("[handleLike] - Calling");
        dispatch(likePost({
            postId : post.id
        }))
    };

    const handleOpenComment = function() {
        setIsVisible(true);
        dispatch(postSlice.actions.clearComment);
        dispatch(getComment({postId : post.id}));
    }

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
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Avatar size={60} rounded source={{uri: BASE_SERVER_FILES + post.avatar}}/>
                    <View style={{flexDirection: "column", marginLeft: 8}}>
                        <Text style={styles.titleText}>{post.user}</Text>
                        <Text> {getTimeDifference(post.date)} .</Text>
                    </View>
                </View>
                <Ionicons name="ellipsis-vertical" style={{fontSize: 24}}/>
            </View>
            <Text
                style={{
                    paddingLeft: 16,
                    fontSize: 16,
                    paddingBottom: 4,
                }}
            >
                {post.caption}
            </Text>
            {
                post.imageContent.length !== 0 &&
                <Slideshow listImage={post.imageContent.map(image => BASE_SERVER_FILES + image.fileName)}/>
            }
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
                    style={{color: "#1E90FF", fontSize: 16, paddingLeft: 8}}
                >
                    <Text style={{fontSize: 13}}>{post.likeNumber}</Text>
                </AntDesign>
                <Text style={{fontSize: 14, paddingRight: 8}}>
                    {post.comment} comments
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
                    name={post.isLike ? "like1" : "like2"}
                    color={post.isLike ? "#1E90FF" : "black"}
                    style={{fontSize: 32, paddingRight: 8}}
                    onPress={handleLike}
                />
                <Text style={{fontSize: 16, color: post.isLike ? "#1E90FF" : "black"}}>
                    Like
                </Text>
                <MaterialCommunityIcons
                    name="comment-outline"
                    style={{fontSize: 32, marginLeft: 64, paddingRight: 8}}
                    onPress={handleOpenComment}
                />
                <Text style={{fontSize: 16}}>Comment</Text>
            </View>

            {/* comments */}

            <BottomSheet
                onBackdropPress={() => {
                    setIsVisible(!isVisible);
                }}
                modalProps={{}}
                isVisible={isVisible}
            >
                <Comment currentPost={post.id}/>
            </BottomSheet>
        </View>
    );
}

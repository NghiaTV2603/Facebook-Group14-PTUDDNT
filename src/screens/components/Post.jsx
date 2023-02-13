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
 *       "images": [],
 *       "videos": [],
 *       "like": [],
 *       "countComments": 0,
 *       "isLike": false,
 *       "_id": "63e684eafd8ecd0021ee8c6e",
 *       "author": {
 *         "_id": "6395ef6b6eca6b001600dac7",
 *         "phonenumber": "0987654321+1",
 *         "username": "congson1907vn",
 *         "avatar": {
 *           "_id": "63e7c7f935b993002107ed98",
 *           "fileName": "e80803c1-71aa-4b16-a7c1-37ab591c6db9.jpg"
 *         }
 *       },
 *       "described": "sd",
 *       "createdAt": "2023-02-10T17:54:50.698Z",
 *       "updatedAt": "2023-02-10T17:54:50.698Z",
 *       "__v": 0
 *     }
 */
export default function Post(props) {
    const post = props.dataPost
    const [like, setLike] = React.useState(post.like);
    const [isLike, setIsLike] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);
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
                    <Text style={{fontSize: 13}}>{like}</Text>
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
                    name={isLike ? "like1" : "like2"}
                    color={isLike ? "#1E90FF" : "black"}
                    style={{fontSize: 32, paddingRight: 8}}
                    onPress={handleLike}
                />
                <Text style={{fontSize: 16, color: isLike ? "#1E90FF" : "black"}}>
                    Like
                </Text>
                <MaterialCommunityIcons
                    name="comment-outline"
                    style={{fontSize: 32, marginLeft: 64, paddingRight: 8}}
                    onPress={() => setIsVisible(true)}
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
                <Comment/>
            </BottomSheet>
        </View>
    );
}

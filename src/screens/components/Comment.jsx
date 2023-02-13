import {Avatar, BottomSheet, ListItem} from "@rneui/themed";
import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {commentPostSelector} from "../../app/selector";
import {createComment} from "./postThunk";

const styles = StyleSheet.create({
    titleComment: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

const authenUser = {
    username: 'NghiaTV',
    avatar: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/305661487_1194341188091112_1645695713395016930_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W_DuuX3bx5gAX-pnAJA&_nc_ht=scontent-hkg4-2.xx&oh=00_AfBJo83lNVrryho2atxL6o7DSP3QeSTASncKzVbbY8yRsQ&oe=63A74253',
}

export default function Comment({currentPost}) {
    const comments = useSelector(commentPostSelector)
    const [inputValue, setInputValue] = React.useState();
    const dispatch = useDispatch();

    const onChangeText = (text) => setInputValue({
        name: authenUser.username,
        avatar: authenUser.avatar,
        comment: text,
    });
    const onSubmit = () => {
        let payload = {
            postId : currentPost,
            content : inputValue
        }
        console.log(JSON.stringify(payload));
        dispatch(createComment({
            postId : currentPost,
            content : inputValue.comment
        }))
        setInputValue('');
    };
    return (
        <View>
            <ListItem>
                <View style={{height: 440}}>
                    <ScrollView style={{width: "100%"}}>
                        {comments.map((cmt, index) => (
                            <View
                                key={"CMT_" + index}
                                style={{
                                    flexDirection: "row",
                                    width: 380,
                                    alignItems: "center",
                                    paddingLeft: 12,
                                    paddingBottom: 12,
                                }}
                            >
                                <View style={{flexDirection: "row"}}>
                                    <Avatar size={40} rounded source={{uri: cmt.avatar}}/>
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
                                        <Text style={styles.titleComment}>{cmt.username}</Text>
                                        <Text style={{marginRight: 8}}>{cmt.comment}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ListItem>
            <ListItem>
                <View
                    style={{flexDirection: "row", alignItems: "center", height: 40}}
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
                        onChangeText={onChangeText}
                        value={inputValue}
                    />
                    <MaterialCommunityIcons
                        name="send"
                        color="#1877F2"
                        style={{fontSize: 32}}
                        onPress={onSubmit}
                    ></MaterialCommunityIcons>
                </View>
            </ListItem>
        </View>
    )
}
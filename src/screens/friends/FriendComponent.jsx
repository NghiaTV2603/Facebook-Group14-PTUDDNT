import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import gStyle from "../../styles/globalStyle";
import {BASE_SERVER_FILES} from "../../app/constants";
import {Button} from "@rneui/themed";
import * as React from "react";
import {FriendConstant} from "./model";
import {useDispatch} from "react-redux";
import {setAcceptFriend, setCancelRequest, setFriend, setRemoveFriend} from "./FriendThunk";

const styles = StyleSheet.create({
    fullScreen: {
        width: "100%", height: "100%", paddingHorizontal: 10,
    }, buttonStyle: {
        backgroundColor: "#00A3FF",
    }, buttonContainerStyle: {
        borderRadius: 10,
    },
})

export default function FriendComponent({data, option, showFriendInfoCallback, ...props}) {
    const dispatch = useDispatch();
    function handleConfirmFriendRequest() {
        console.log("[FriendComponent - handleConfirm - data = " + data._id);
        // TODO : Thực hiện call API xác nhận kết bạn ở đây
        dispatch(setAcceptFriend({
            user_id : data._id,
            is_accept : "1",
        }))
    }

    function handleCancelFriendRequest() {
        // TODO : Thực hiện call API hủy kết bạn ở chỗ này
        console.log("[FriendComponent - cancelFriend - data = " + data._id);
        dispatch(setCancelRequest({
            user_id : data._id
        }))
    }

    function handleRemoveFriend() {
        // TODO : Thực hiện call API xóa kết bạn
        dispatch(setRemoveFriend({
            user_id : data._id
        }))
    }

    function handleSetFriend() {
        dispatch(setFriend({
            user_id : data._id
        }))
    }

    function handleFriendInfoCallBack() {
        showFriendInfoCallback(data._id);
    }


    const buttonWithOption = function (option) {

    }

    return <>
        <View style={{
            height: 90, width: "100%", ...gStyle.row, marginBottom: 10, position: "relative",
        }}>
            <TouchableHighlight onPress={handleFriendInfoCallBack} style={{
                borderRadius: 15
            }}>
                <Image
                    style={{
                        height: "100%", aspectRatio: 1, borderRadius: 15,
                    }}
                    source={{uri: BASE_SERVER_FILES + data.avatar.fileName}}
                />
            </TouchableHighlight>
            <View style={{
                flex: 1, ...gStyle.column,
                alignItems: "flex-start",
                paddingHorizontal: 5,
                marginLeft: 10,
                justifyContent: "space-between"
            }}>
                <Text
                    style={{
                        fontSize: 24, fontWeight: "bold",
                    }}
                >{data.username}</Text>
                <View style={{
                    ...gStyle.row, width: "100%", justifyContent: "space-between"
                }}>
                    {
                        (option === FriendConstant.OPTION.SUGGEST) ? <>
                                <Button
                                    title={"Confirm"} buttonStyle={styles.buttonStyle}
                                    containerStyle={{flex: 10, borderRadius: 10}}
                                    onPress={handleConfirmFriendRequest}
                                />
                                <View style={{flex: 1}}/>
                                <Button title={"Cancel"} buttonStyle={{backgroundColor: "#EEEEEE"}}
                                        containerStyle={{flex: 10, borderRadius: 10}}
                                        titleStyle={{color: 'black'}}
                                        onPress={handleCancelFriendRequest}
                                />
                            </> :
                            (option === FriendConstant.OPTION.YOUR_FIEND) ?
                                <Button title={"Remove friend"} buttonStyle={{backgroundColor: "#EEEEEE"}}
                                        containerStyle={{width: "100%", borderRadius: 10}}
                                        titleStyle={{color: 'black'}}
                                        onPress={handleRemoveFriend}
                                /> :
                                <Button
                                    title={"Add friend"} buttonStyle={styles.buttonStyle}
                                        containerStyle={{width: "100%", borderRadius: 10}}
                                        titleStyle={{color: 'white'}}
                                        onPress={handleSetFriend}
                                />
                    }
                </View>

            </View>
        </View>
    </>;
}

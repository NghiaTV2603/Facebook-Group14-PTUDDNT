import {Image, StyleSheet, Touchable, TouchableHighlight} from "react-native";
import {View, Text, ScrollView} from "react-native";
import gStyle from "../../styles/globalStyle";
import {BottomSheet, Button} from "@rneui/themed";
import {useState} from "react";
import friendMock from "./FriendMock";
import * as React from "react";
import TitleBar from "../share_components/TitleBar";
import BottomSheetProfile from "../share_components/BottomSheetProfile";

const FriendConstant = {
    OPTION: {
        SUGGEST: "suggest", YOUR_FIEND: "friend",
    }
}

const styles = StyleSheet.create({
    fullScreen: {
        width: "100%", height: "100%", paddingHorizontal: 10,
    }, buttonStyle: {
        backgroundColor: "#00A3FF"
    }, buttonContainerStyle: {
        borderRadius: 10,
    },
})

function Option({callBack, ...props}) {
    function runCallBack(/** FriendConstant.OPTION*/ value) {
        (value);
        if (callBack !== undefined) {
            callBack(value);
        }
    }

    return (<>
        <View style={{
            ...gStyle.row, alignItems: "flex-start", width: 200, justifyContent: "space-between", ...props.style
        }}>
            <Button
                title={"Suggestions"}
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.buttonContainerStyle}
                onPress={() => runCallBack(FriendConstant.OPTION.SUGGEST)}
            />
            <Button
                buttonStyle={styles.buttonStyle}
                containerStyle={styles.buttonContainerStyle}
                title={"Friends"}
                onPress={() => runCallBack(FriendConstant.OPTION.YOUR_FIEND)}
            />
        </View>
    </>);
}

/**
 * Thành phần để hiển thị một tab friend trong trang Friend
 * @param {FriendModel} data
 * @param {FriendConstant.OPTION} option
 * @param {function} showFriendInfoCallback
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function FriendComponent({data, option, showFriendInfoCallback, ...props}) {
    function confirmButtonHandler() {
        // TODO : Thực hiện call API xác nhận kết bạn ở đây
    }

    function cancelButtonHandler() {
        // TODO : Thực hiện call API hủy kết bạn ở chỗ này
    }

    function showFriendInfo() {
        if (showFriendInfoCallback) {
            showFriendInfoCallback(data.uid);
            return;
        }
        ("Show Friend Info Callback is null");
    }

    return <>
        <View style={{
            height: 90, width: "100%", ...gStyle.row, marginBottom: 10, position: "relative",
        }}>
            <TouchableHighlight onPress={showFriendInfo} style={{
                borderRadius: 15
            }}>
                <Image
                    style={{
                        height: "100%", aspectRatio: 1, borderRadius: 15,
                    }}
                    source={{uri: data.avatarUrl}}
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
                >{data.name}</Text>
                <View style={{
                    ...gStyle.row, width: "100%", justifyContent: "space-between"
                }}>
                    {option === FriendConstant.OPTION.SUGGEST ? <>
                        <Button
                            title={"Confirm"} buttonStyle={styles.buttonStyle}
                            containerStyle={{flex: 10, borderRadius: 10}}/>
                        <View style={{flex: 1}}/>
                        <Button title={"Cancel"} buttonStyle={{backgroundColor: "#EEEEEE"}}
                                containerStyle={{flex: 10, borderRadius: 10}}
                                titleStyle={{color: 'black'}}/>
                    </> : <Button title={"Cancel"} buttonStyle={{backgroundColor: "#EEEEEE"}}
                                  containerStyle={{width: "100%", borderRadius: 10}}
                                  titleStyle={{color: 'black'}}/>
                    }
                </View>

            </View>
        </View>
    </>;
}

export default function Friend() {
    const [option, setOption] = useState(FriendConstant.OPTION.SUGGEST);
    const [isShowFriendProfile, setShowFriendProfile] = useState(false);
    const [friendInfo, setFriendInfo] = useState(null);

    function handleChangeOption(/** FriendConstant.OPTION */ value) {
        setOption(value);
    }

    /**
     * @param {string} uid
     */
    function showFriendProfile(uid) {
        let selectedInfo = friendMock[option].find((/** FriendModel */ element) => element.uid === uid);
        if (selectedInfo) {
            (JSON.stringify(selectedInfo));
            setFriendInfo(selectedInfo);
            setShowFriendProfile(true);
        }
    }

    return (<View style={{
        ...styles.fullScreen,
    }}>
        <TitleBar
            title={"Friend"}
            searchCallback={null}
        />
        <Option
            callBack={handleChangeOption}
        />
        <ScrollView style={{
            marginTop: 20,
        }}>
            {friendMock[option].map((element) =>
                <FriendComponent
                    data={element}
                    key={element.uid}
                    option={option}
                    showFriendInfoCallback={showFriendProfile}
                />
            )}
        </ScrollView>
        <BottomSheetProfile
            isVisible={isShowFriendProfile}
            uid={"TEST_PROFILE"}
            closeCallback={() => setShowFriendProfile(false)}
        />
    </View>);
}


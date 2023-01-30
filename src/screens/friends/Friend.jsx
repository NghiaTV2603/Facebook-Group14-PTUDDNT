import {Image, StyleSheet, Touchable, TouchableHighlight} from "react-native";
import {View, Text, ScrollView} from "react-native";
import gStyle from "../styles/globalStyle";
import {BottomSheet, Button} from "@rneui/themed";
import {useState} from "react";
import friendMock from "./FriendMock";
import * as React from "react";
import Profile from "../profile/Profile";
import {mergeOptions} from "@babel/core/lib/config/util";
import {configureStore} from "@reduxjs/toolkit";

const FriendConstant = {
    OPTION: {
        SUGGEST: "suggest", YOUR_FIEND: "friend",
    }
}

const styles = StyleSheet.create({
    fullScreen: {
        width: "100%", height: "100%", paddingHorizontal: 10,
    }, titleBar: {
        height: 65, width: "100%",
    }, titleText: {
        fontSize: 32, fontWeight: "bold",
    }, buttonStyle: {
        backgroundColor: "#00A3FF"
    }, buttonContainerStyle: {
        borderRadius: 10,
    },
})

function Option({callBack, ...props}) {
    function runCallBack(/** FriendConstant.OPTION*/ value) {
        console.log(value);
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
        console.log("Show Friend Info Callback is null");
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
                        <Button title={"Confirm"} buttonStyle={styles.buttonStyle}
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

function TitleBar() {
    return (<>
        <View style={{
            ...styles.titleBar, ...gStyle.row, ...gStyle.flexCenter, justifyContent: "space-between",
        }}>
            <Text style={styles.titleText}>Friend</Text>
            <Button
                icon={{
                    name: "search", type: "font-awesome", size: 20, color: "black",
                }}
                buttonStyle={{
                    backgroundColor: "#EEEEEE",
                }}
                containerStyle={{
                    height: 40, borderRadius: 10,
                }}
                title={" "}
            ></Button>

        </View>
    </>);
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
            console.log(JSON.stringify(selectedInfo));
            setFriendInfo(selectedInfo);
            setShowFriendProfile(true);
        }
    }

    return (<View style={{
        ...styles.fullScreen,
    }}>
        <TitleBar/>
        <Option
            callBack={handleChangeOption}
        />
        <ScrollView style={{
            marginTop: 20,
        }}>
            {friendMock[option].map((element) => <FriendComponent data={element} key={element.uid}
                                                                  option={option}
                                                                  showFriendInfoCallback={showFriendProfile}/>)}
        </ScrollView>
        <BottomSheet isVisible={isShowFriendProfile}>
            <View style={{
                backgroundColor: "white",
                position : "relative"
            }}>
                <ScrollView
                    stickyHeaderIndices={[0]}
                >
                    <Button
                        key={"BUTTON 1"}
                        icon={{
                            name: "arrow-left", type: "font-awesome", size: 20, color: "black",
                        }}
                        title={""}
                        onPress={() => setShowFriendProfile(false)}
                        buttonStyle={{
                            backgroundColor: "#EEEEEE",
                        }}
                        containerStyle={{
                            position : "absolute",
                            zIndex : 1000,
                            top : 10,
                            left : 10,
                        }}
                    />
                    <Profile key={"PROFILE"}/>
                </ScrollView>
            </View>
        </BottomSheet>
    </View>);
}


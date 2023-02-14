import {StyleSheet} from "react-native";
import {View, ScrollView} from "react-native";
import gStyle from "../../styles/globalStyle";
import {Button} from "@rneui/themed";
import {useState} from "react";
import * as React from "react";
import TitleBar from "../share_components/TitleBar";
import BottomSheetProfile from "../share_components/BottomSheetProfile";
import {useSelector} from "react-redux";
import {getListFriendSelector} from "../../app/selector";
import FriendComponent from "./FriendComponent";
import FriendModel, {FriendConstant} from "./model";


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
                title={"Requested"}
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

export default function Friend() {
    const [option, setOption] = useState(FriendConstant.OPTION.SUGGEST);
    const [isShowFriendProfile, setShowFriendProfile] = useState(false);
    let listRequested = [
        new FriendModel("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqK4bvzwptQBDWvVgok2N9PJ5fYIYasm-rQ&usqp=CAU", "Hello My Friend 1", "1239jiowajefojoi3131"),
        new FriendModel("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqK4bvzwptQBDWvVgok2N9PJ5fYIYasm-rQ&usqp=CAU", "Hello My Friend 2", "1239jiowajefojoi3132"),
        new FriendModel("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqK4bvzwptQBDWvVgok2N9PJ5fYIYasm-rQ&usqp=CAU", "Hello My Friend 3", "1239jiowajefojoi3133"),
        new FriendModel("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqK4bvzwptQBDWvVgok2N9PJ5fYIYasm-rQ&usqp=CAU", "Hello My Friend 4", "1239jiowajefojoi3134"),
        new FriendModel("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqK4bvzwptQBDWvVgok2N9PJ5fYIYasm-rQ&usqp=CAU", "Hello My Friend 5", "1239jiowajefojoi3135"),
        new FriendModel("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqK4bvzwptQBDWvVgok2N9PJ5fYIYasm-rQ&usqp=CAU", "Hello My Friend 5", "1239jiowajefojoi3136"),
    ];
    let listFriend = useSelector(getListFriendSelector);
    console.log("listFriend " + JSON.stringify(listFriend));

    /**
     * @param {FriendConstant.OPTION}
     * @returns {Object[]}
     */
    const getDisplayList = (option) => {
        if (option === FriendConstant.OPTION.SUGGEST) {
            return listRequested;
        } else {
            return listFriend;
        }
    }

    function handleChangeOption(/** FriendConstant.OPTION */ value) {
        setOption(value);
    }

    /**
     * @param {string} uid
     */
    function showFriendProfile(uid) {
        // let selectedInfo = friendMock[option].find((/** FriendModel */ element) => element.uid === uid);
        // if (selectedInfo) {
        //     (JSON.stringify(selectedInfo));
        //     setFriendInfo(selectedInfo);
        //     setShowFriendProfile(true);
        // }
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
            {
                option === FriendConstant.OPTION.YOUR_FIEND && listFriend.map((element) =>
                <FriendComponent
                    data={element}
                    key={element._id}
                    option={option}
                    showFriendInfoCallback={showFriendProfile}
                />
                )
            }
            {/*{*/}
            {/*    option === FriendConstant.OPTION.SUGGEST && listRequested.map((element) =>*/}
            {/*    <FriendComponent*/}
            {/*        data={element}*/}
            {/*        key={element._id}*/}
            {/*        option={option}*/}
            {/*        showFriendInfoCallback={showFriendProfile}*/}
            {/*    />*/}
            {/*    )*/}
            {/*}*/}

        </ScrollView>
        <BottomSheetProfile
            isVisible={isShowFriendProfile}
            uid={"TEST_PROFILE"}
            closeCallback={() => setShowFriendProfile(false)}
        />
    </View>);
}


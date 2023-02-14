import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import gStyle from "../../styles/globalStyle";
import {useState} from "react";
import {Button} from "@rneui/base";
import {getSearchItems} from "../profile/userThunk";
import {useDispatch, useSelector} from "react-redux";
import {userSearchItem} from "../../app/selector";
import BottomSheetProfile from "../share_components/BottomSheetProfile";
import FriendComponent from "./FriendComponent";
import {FriendConstant} from "./model";

const styles = StyleSheet.create({
    fullScreen: {
        width: "100%", height: "100%", paddingHorizontal: 10,
    }, buttonStyle: {
        backgroundColor: "#00A3FF"
    }, buttonContainerStyle: {
        borderRadius: 10,
    },
})
export default function SearchBottomSheetContent({closeCallBack}) {
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();
    const searchItems = useSelector(userSearchItem);

    const [isShowProfile, setShowProfile] = useState(false);
    const handleChangeText = function (newValue) {
        setKeyword(newValue);
        console.log("Calling");
    }

    const handleSearch = function () {
        console.log("[Search] calling API with keyword = " + keyword);
        dispatch(getSearchItems({keyword: keyword}));
    }

    const handleShowProfile = function () {
        setShowProfile(true);
    }

    return (
        <>
            <View style={{
                width: "100%",
                height: 800,
                backgroundColor: "white",
                paddingTop: 10,
                paddingHorizontal: 10,
            }}>
                <View style={{
                    ...styles.titleBar, ...gStyle.row, ...gStyle.flexCenter, justifyContent: "space-between",
                }}>
                    <Button
                        icon={{name: "arrow-left", type: "font-awesome", size: 20, color: "black",}}
                        buttonStyle={{backgroundColor: "#EEEEEE",}}
                        containerStyle={{height: 40, borderRadius: 10,}}
                        title={" "}
                        onPress={closeCallBack}
                    ></Button>
                    <TextInput
                        onChangeText={(newText) => {
                            handleChangeText(newText);
                        }}
                        style={{
                            width: 230,
                            height: 40,
                            marginRight: 10,
                            backgroundColor: '#DEDEDE',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                        }}
                    />
                    <Button
                        icon={{name: "search", type: "font-awesome", size: 20, color: "black",}}
                        buttonStyle={{backgroundColor: "#EEEEEE",}}
                        containerStyle={{height: 40, borderRadius: 10,}}
                        title={" "}
                        onPress={() => {
                            handleSearch();
                        }}
                    ></Button>
                </View>
                <ScrollView style={{
                    flex: 1,
                    marginTop: 10,
                }}>
                    {
                        searchItems.map((element) => {
                            if (element.friendStatus) {
                                return (
                                    <FriendComponent
                                        data={element}
                                        key={element._id}
                                        option={FriendConstant.OPTION.NON_FRIEND}
                                        showFriendInfoCallback={handleShowProfile}
                                    />
                                )
                            } else if (!element.content) {
                                return (<FriendComponent
                                    data={element}
                                    key={element._id}
                                    option={FriendConstant.OPTION.YOUR_FIEND}
                                    showFriendInfoCallback={handleShowProfile}
                                />);
                            } else {
                                return <Text>This is message</Text>
                            }
                        })
                    }
                </ScrollView>
            </View>
            <BottomSheetProfile
                isVisible={isShowProfile}
                uid={"TEST_PROFILE"}
                closeCallback={() => setShowProfile(false)}
            />

        </>
    );
}
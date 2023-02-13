import {ScrollView, StyleSheet, TextInput, View} from "react-native";
import gStyle from "../../styles/globalStyle";
import {useState} from "react";
import {Button} from "@rneui/base";
import {getSearchItems} from "../profile/userThunk";
import {useDispatch, useSelector} from "react-redux";
import {userSearchItem} from "../../app/selector";

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
    const handleChangeText = function (newValue) {
        setKeyword(newValue);
        console.log("Calling");
    }

    const handleSearch = function () {
        console.log("[Search] calling API with keyword = " + keyword);
        dispatch(getSearchItems({keyword : keyword}));
    }

    return (
        <>
            <View style={{
                width: "100%",
                height: 800,
                backgroundColor : "white",
                paddingTop : 10,
                paddingHorizontal : 10,
            }}>
                <View style={{
                    ...styles.titleBar, ...gStyle.row, ...gStyle.flexCenter, justifyContent: "space-between",
                }}>
                    <Button
                        icon={{ name: "arrow-left", type: "font-awesome", size: 20, color: "black", }}
                        buttonStyle={{ backgroundColor: "#EEEEEE", }}
                        containerStyle={{ height: 40, borderRadius: 10, }}
                        title={" "}
                        onPress={closeCallBack}
                    ></Button>
                    <TextInput
                        onChangeText={(newText) => {
                            handleChangeText(newText);
                        }}
                        style={{
                            width: 230,
                            height : 40,
                            marginRight: 10,
                            backgroundColor: '#DEDEDE',
                            borderRadius: 10,
                            paddingHorizontal: 10,
                        }}
                    />
                    <Button
                        icon={{ name: "search", type: "font-awesome", size: 20, color: "black", }}
                        buttonStyle={{ backgroundColor: "#EEEEEE", }}
                        containerStyle={{ height: 40, borderRadius: 10, }}
                        title={" "}
                        onPress={() => {
                            handleSearch();
                        }}
                    ></Button>
                </View>
                <ScrollView>

                </ScrollView>
            </View>
        </>
    );
}
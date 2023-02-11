import {View, StyleSheet, ToastAndroid} from "react-native";
import {Button} from "@rneui/base";
import gStyle from "../../../styles/globalStyle";
import Feather from "react-native-vector-icons/Feather";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getUserInfo} from "../userThunk";

let styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 7,
        height: 35,
        width: 150,
        padding : 0,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
})

function LinearButton({children, containerStyle, buttonStyle, buttonHandler}) {
    let [isLoading, setLoading] = useState(false);
    let dispatch = useDispatch();
    if (!buttonHandler) {
        buttonHandler = () => {
            dispatch(getUserInfo());
        }
    }
    return (<Button
        titleStyle={{
            paddingTop : 7,
            textAlign: "center",
            width: "100%",
            height: "100%"
        }}
        onPress={buttonHandler}
        loading={isLoading}
        containerStyle={containerStyle}
        buttonStyle={buttonStyle}
        ViewComponent={LinearGradient}
        linearGradientProps={{
            colors: ["#384CFF", "#00A3FF"],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
        }}
    >
        {children}
    </Button>)
}

export default function ProfileModify({ isMyProfile, isMyFriend }) {

    let displayButtonText = function(isMayProfile, isMyFriend) {
        if (isMayProfile) {
            return "Add to story";
        } else {
            if (isMyFriend) {
                return "Friend";
            } else {
                return "Add to friend";
            }
        }
    };

    const showToaster = function() {
        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    };

    return (<>
        <View style={{
            ...gStyle.row,
            ...gStyle.flexCenter,
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 10,
            marginTop: 20,
            paddingBottom: 20,
            borderBottomColor: "#AAAAAA",
            borderBottomWidth: 1,
        }}>
            <LinearButton
                buttonStyle={styles.buttonContainer}
            >
                {displayButtonText(isMyProfile, isMyFriend)}
            </LinearButton>
            <LinearButton buttonStyle={styles.buttonContainer}>
                Edit profile
            </LinearButton>
            <Button
                buttonStyle={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: 7,
                }}
            >
                <Feather
                    name={"more-vertical"}
                    size={22}
                />
            </Button>
        </View>
    </>);

}
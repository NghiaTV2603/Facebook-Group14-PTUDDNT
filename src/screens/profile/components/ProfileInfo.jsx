import {Text, View, StyleSheet} from "react-native";
import gStyle from "../../../styles/globalStyle";
import Feather from "react-native-vector-icons/Feather";
import {useSelector} from "react-redux";
import {userInfoSelector} from "../../../app/selector";

let styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    textNormal: {
        fontSize: 18,
        fontWeight: "normal",
    },
    textBold: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

function Info({infoKey, content}) {
    const getDisplayTextByKey = function(key) {
        switch (key) {
            case "gender":
                return "She/he was ";
            case "birthday":
                return "She/he was born on ";
            case "description":
                return "Some description: ";
            case "phonenumber":
                return "Contact to me with number: ";
            case "address":
                return "Live in";
        }

    };
    return (
        <>
            <View style={{
                ...gStyle.row,
                ...gStyle.flexCenter,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                marginBottom: 5,
            }}>
                <Feather
                    name={"more-vertical"} size={25}
                />
                <Text style={styles.textNormal}>{getDisplayTextByKey(infoKey)}
                    <Text style={styles.textBold}>{
                        infoKey === "birthday" ? (new Date(content).toLocaleDateString()) : content
                    }</Text>
                </Text>
            </View>
        </>
    )
}

export default function ProfileInfo() {
    let userInfo = useSelector(userInfoSelector);
    // console.log("[ProfileInfo] - " + JSON.stringify(userInfo));
    return (
        <>
            <View style={{
                ...styles.container,
                ...gStyle.column,
                alignItems: "flex-start",
            }}>
                {
                    Object.entries(userInfo).map(([key, value]) => <Info key={"profileInfo" + key} infoKey={key}
                                                         content={value}/>)
                }
            </View>
        </>
    )

}
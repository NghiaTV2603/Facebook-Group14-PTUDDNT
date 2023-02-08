import {Text, View, StyleSheet} from "react-native";
import gStyle from "../../../styles/globalStyle";
import Feather from "react-native-vector-icons/Feather";

let styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 236,
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

function Info({info, content}) {
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
                <Text style={styles.textNormal}>{info}
                    <Text style={styles.textBold}>{content}</Text>
                </Text>
            </View>
        </>
    )
}

export default function ProfileInfo({details}) {
    ("\n\n");
    (JSON.stringify(details));
    ("\n\n");
    return (
        <>
            <View style={{
                ...styles.container,
                ...gStyle.column,
                alignItems: "flex-start",
            }}>
                {
                    details.map((detail, index) => <Info key={"profileInfo" + index} info={detail.title}
                                                         content={detail.content}/>)
                }
            </View>
        </>
    )

}
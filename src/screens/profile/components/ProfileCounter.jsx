import {StyleSheet, View, Text} from "react-native";
import gStyle from "../../styles/globalStyle";
import {LinearGradient} from "expo-linear-gradient";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 81,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#AAAAAA",
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    counterText: {
        fontSize: 14,
        fontWeight: "normal"
    },
})

function Info({title, counter}) {
    return (
        <View style={{...gStyle.column, ...gStyle.flexCenter}}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.counterText}>{counter}</Text>
        </View>
    );
}

export default function ProfileCounter({infos}) {
    return (
        <View style={{
            ...styles.container,
            ...gStyle.row,
            justifyContent: "space-between",
        }}>
            {
                infos.map((info, index) => <Info key={"profileCounter" + index} title={info.title} counter={info.counter}/>)
            }
        </View>
    );

}
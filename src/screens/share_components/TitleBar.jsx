import {StyleSheet, Text, View} from "react-native";
import gStyle from "../../styles/globalStyle";
import {Button} from "@rneui/themed";
import * as React from "react";

let styles = StyleSheet.create({
    titleBar: {
        height: 65, width: "100%",
    },
    titleText: {
        fontSize: 32, fontWeight: "bold",
    },
});

/**
 * @param {String} title
 * @param {Function}searchCallback
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function TitleBar({title, searchCallback, ...props}) {
    const handleSearchCallback = function() {
        if (searchCallback === null) {
            ("[TITLE BAR] - No searchCallback");
        } else {
            searchCallback();
        }
    }
    return (<>
        <View style={{
            ...styles.titleBar, ...gStyle.row, ...gStyle.flexCenter, justifyContent: "space-between",
        }}>
            <Text style={styles.titleText}>{title}</Text>
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
                onPress={handleSearchCallback}
            ></Button>

        </View>
    </>);
}

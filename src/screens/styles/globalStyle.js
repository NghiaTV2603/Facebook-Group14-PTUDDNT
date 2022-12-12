import {StyleSheet} from "react-native";

let gStyle = StyleSheet.create({
    row : {
        display : "flex",
        flexDirection : "row",
    },
    column : {
        display : "flex",
        flexDirection : "column",
    },
    flexCenter : {
        justifyContent : "center",
        alignItems : "center"
    },
    fullWidth:{
        width : "100%",
    },
    fullHeight : {
        height : "100%",
    },
});

export default gStyle;

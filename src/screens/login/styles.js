import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        borderRadius: 10,
        paddingLeft: 8,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        marginTop: 8,
        backgroundColor: "#00A3FF",
        color: 'white',
    },
    logo: {
        width: 70,
        height: 70,
        marginBottom: 20,
    },
})
export {styles}
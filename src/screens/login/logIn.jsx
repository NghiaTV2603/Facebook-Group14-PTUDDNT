import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, View, Button} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {loginWithPhoneNumber} from "./authThunk";
import {authSelector} from "../../app/selector";

export default function Login(props) {
    const [phoneNumber, setPhoneNumber] = useState("0987654321+1");
    const [password, setPassword] = useState("Chucthanhlam@1907");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const handleLogin = function() {
        dispatch(loginWithPhoneNumber({phoneNumber : phoneNumber, password : password}));
    }

    return (
        <View style={styles.container}>
            <Text>Login</Text>
            {errorMessage &&
                <Text style={{color: 'red'}}>
                    {errorMessage}
                </Text>}
            <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Email"
                onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                value={phoneNumber}
            />
            <TextInput
                secureTextEntry
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <Button title="Login" onPress={handleLogin}/>
            <Button
                title="Don't have an account? Sign Up"
                onPress={() => {
                    ("NAVIGATE TO SIGN UP PAGE");
                }}
            />
        </View>
    )
}

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
        marginTop: 8
    }
})
import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Image} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {styles} from './styles';

export default function SignUp(props) {
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();
    const [userName, setUserName] = useState();
    const [errorMessage, setMessageError] = useState({
        phoneNumber : '',
        userName: '',
        errorRegister : ""
    });
    const dispatch = useDispatch();

    const handleSignUp = () => {
        // TODO: Firebase stuff...
        console.log('handleSignUp');

    }


    const mobileValidate = (text) => {
        //const reg = /^[0]?[789]\d{9}$/;
        const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        setPhoneNumber(text);
        if (re.test(text) === false) {
            setMessageError({
                ...errorMessage,
                phoneNumber: "Error type of Phone Number",
            })
            return false;
        } else {
            setMessageError({
                ...errorMessage,
                phoneNumber: '',
            })
            return true;
        }
    }
    const userNameValidate = (text) => {
        const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        setUserName(text);
        if (regName.test(text) === false) {
            setMessageError({
                ...errorMessage,
                userName: "Invalid name",
            })
            return false;
        } else {
            setMessageError({
                ...errorMessage,
                userName: 'Valid name',
            })
            return true;
        }
    }



    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
                    }}
                />
                {errorMessage &&
                    <>
                        <Text style={{color: 'red'}}>
                            {errorMessage.phoneNumber}
                        </Text>
                        <Text style={{color: 'red'}}>
                            {errorMessage.userName}
                        </Text>
                        <Text style={{color: 'red'}}>
                            {errorMessage.errorRegister}
                        </Text>
                    </>
                }
                <TextInput
                    placeholder="Phone"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={phone => mobileValidate(phone)}
                    value={phoneNumber}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => setPassword(password)}
                    value={password}
                />
                <TextInput
                    placeholder="Your Name"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={name => userNameValidate(name)}
                    value={userName}
                />
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={{color : "white", fontWeight: 'bold', fontSize: 20}}>SignUp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={props.onRegister}>
                    <Text style={{color : "white", fontWeight: 'bold', fontSize: 15}}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
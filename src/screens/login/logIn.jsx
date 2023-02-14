import React, {useState} from 'react'
import {Text, TextInput, View, TouchableOpacity, Image} from 'react-native'
import {useDispatch, useSelector} from "react-redux";
import {loginWithPhoneNumber} from "./authThunk";
import {loginMessageErrorSel} from "../../app/selector";
import SignUp from "./SignUp";
import {styles} from './styles';

export default function Login(props) {
    const [phoneNumber, setPhoneNumber] = useState("0987654321+1");
    const [password, setPassword] = useState("Chucthanhlam@1907");
    //const errorMessage = useSelector(loginMessageErrorSel);
    const [errorMessage, setMessageError] = useState({
        phoneNumber: '',
        password: '',
        errorLogin: useSelector(loginMessageErrorSel),
    })
    const dispatch = useDispatch();
    const [isRegister, setRegister] = useState(false);
    const handleLogin = function () {
        dispatch(loginWithPhoneNumber({phoneNumber: phoneNumber, password: password}));
    }

    const handleRegister = function () {
        setRegister(!isRegister);
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
            //setMobileValidate(true);
            return true;
        }
    }

    function checkPassword(str)
    {
        var re =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return re.test(str);
    }

    return (
        <>
            {
                !isRegister ?
                    <View style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
                            }}
                        />
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize="none"
                            placeholder="Phone"
                            onChangeText={phoneNumber => mobileValidate(phoneNumber)}
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
                        {errorMessage &&
                            <>
                            <Text style={{color: 'red'}}>
                                {errorMessage.phoneNumber}
                            </Text>
                            <Text style={{color: 'red'}}>
                                {errorMessage.errorLogin}
                            </Text>
                            </>
                        }


                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={{color : "white", fontWeight: 'bold', fontSize: 20}}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                                          onPress={handleRegister}>
                            <Text style={{color : "white", fontSize: 15}}>Don't have an account? Sign Up</Text>
                        </TouchableOpacity>

                    </View>
                    : <SignUp onRegister = {handleRegister} />
            }
        </>
    )
}

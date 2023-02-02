import * as React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Home from "./src/screens/Home";
import {Provider, useSelector} from "react-redux";
import store from "./src/app/store"
import Login from "./src/screens/login/Login";
import SignUp from "./src/screens/login/SignUp";
import {authSelector} from "./src/app/selector";

function App() {
    return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1}}>
                <Home/>
            </SafeAreaView>
        </Provider>
    );
}

export default App;

import * as React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Home from "./src/screens/Home";
import {Provider} from "react-redux";
import store from "./src/app/store"

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

import React, {useEffect, useState} from "react";
import Message from "./message/Message";
import {Tab, TabView} from "@rneui/themed";
import Profile from "./profile/Profile";
import {AsyncStorage, ScrollView} from "react-native";
import NewFeed from "./NewFeed/NewFeed";
import Friend from "./friends/Friend";
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../app/selector";
import Login from "./login/logIn";
import {getUserInfo} from "./profile/userThunk";
import {getNewFeed} from "./components/postThunk";
import {getListFriend, getListRequestedFriend} from "./friends/FriendThunk";

const TAB = {
    HOME : 0,
    CHAT : 1,
    FRIEND : 2,
    PROFILE : 3
}
const TAB_CONFIG = [
    {name : "Home", iconName : "home", component : <NewFeed key={"NEWFEED"}/>},
    {name : "Chat", iconName : "mail", component : <Message key={"MESSAGE"}/>},
    {name : "Friend", iconName : "mail", component : <Friend key={"FRIEND"}/>},
    {name : "Profile", iconName : "mail", component : <Profile key={"PROFILE"}/>},
]

function Home() {
    const [index, setIndex] = React.useState(0);
    const loginState = useSelector(authSelector);
    const dispatch = useDispatch();
    const [onlyOneLoad, setLoad] = useState(true);

    // Chỉ thực hiện gọi các API liên quan trong 1 lần đầu tiên khi
    // người dùng đăng nhập thành công, sau đó, khi người dùng ở tab nào thì
    // gọi api ở tab đấy riêng
    if (loginState.isLogin && onlyOneLoad) {
        dispatch(getUserInfo());
        dispatch(getNewFeed(null));
        dispatch(getListRequestedFriend(null));
        setLoad(false);
    }

    const getUserNewFeed = function() {
        dispatch(getNewFeed(null))

    }
    const getUserInfoApi = function() {
        dispatch(getUserInfo());
    }

    const getListFriendApi = function() {
        dispatch(getListRequestedFriend(null));
        dispatch(getListFriend(null));
    }

    const handleChangeTab = function(index) {
        switch (index) {
            case TAB.HOME:
                getUserNewFeed();
                break;

            case TAB.CHAT:
                console.log("[Home] - load message API");
                break;

            case TAB.FRIEND:
                getListFriendApi();
                break;

            case TAB.PROFILE:
                getUserInfoApi();
                break;
        }
        setIndex(index);
    }

    return (
        <>
            {
                loginState.isLogin ?
                    <>
                        <Tab
                            value={index}
                            onChange={handleChangeTab}
                            indicatorStyle={{
                                backgroundColor: "white",
                                height: 3,
                            }}
                            variant="primary"
                        >
                            {
                                TAB_CONFIG.map((tabInfo) => <Tab.Item
                                    key={"TAB_" + tabInfo.name}
                                    title={tabInfo.name}
                                    titleStyle={{fontSize : 9}}
                                    icon={{name : tabInfo.iconName, type : "ionicon", color : "white"}}
                                />)
                            }
                        </Tab>

                        <TabView value={index} onChange={setIndex} animationType="spring">
                            {
                                TAB_CONFIG.map((tabInfo) => tabInfo.component)
                            }
                        </TabView>
                    </>
                    : <Login/>

            }
        </>
    );
}
export default Home;

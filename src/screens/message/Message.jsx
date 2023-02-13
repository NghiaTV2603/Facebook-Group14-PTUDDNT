import * as React from "react";
import {ScrollView, Text, TextInput, TouchableHighlight, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Button, Divider, Input} from "@rneui/base";
import {useSelector, useDispatch} from "react-redux";
import {authSelector, dataUserMessage, userSeletor} from "../../app/selector";
import {Avatar, BottomSheet, ListItem} from "@rneui/themed";
import {useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useEffect,useRef} from "react";
import messageSlice, {fetchListChat, fetchMessage} from "./messageSlice";
import {BASE_SERVER_FILES} from "../../app/constants";
import {io} from "socket.io-client";
import socketIOClient from "socket.io-client"


export default function Message() {
    const dispatch = useDispatch()
    const listChat = useSelector(dataUserMessage)
    const dataChat = useSelector((state) => state.message.currentChat)
    const [isVisible, setIsVisible] = useState(false);
    const [e, setE] = useState([])
    const AuthID = (useSelector(userSeletor)).id
    const [message, setMessage] = useState(null)
    const token = useSelector(authSelector).token;

    //test
    const [messageTest, setMessageTest] = useState("");

    const socket = io(
        "https://old-facebook-chat-production.up.railway.app", {
            extraHeaders: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoaWVuaGF1b2NtbzI4MDIiLCJpZCI6IjYzZTc4NzlkODExMDFmMDAyMWY4ODY2NCIsImlhdCI6MTY3NjMwMDc0OX0.7bBHUN0pH2g-BM55e2JBAofyi1OeWpGuscEAvkQcTo4"
            }
        }
    );


    useEffect(() => {
        socket.on('message', () => {
            console.log("RECEIVING MESSAGE");
        })
        return () => {
            socket.off('message');
        }
    }, []);

    // handle send message
    const onChangeMessage = (text) => setMessage(text);

    const handleSendMessage = () => {
        if (message) {
            socket.emit('chatmessage', {
                "token": token,
                "receiverId": e.friend._id,
                "content": message
            });
            const data = {
                "senderId": AuthID,
                "content": message
            }
            setMessage(null)
            dispatch(messageSlice.actions.addMessage(data))
        }
    }
    useEffect(()=>{
        socket.on('message',(data)=>{
            console.log('emit ' + JSON.stringify(data))
        })
    },[socket])

    useEffect(() => {
        dispatch(fetchListChat())
    }, [dispatch])

    const handleFetchMessage = (chatId) => {
        dispatch(fetchMessage(chatId))
    }
    return (
        <View>
            <View style={{flexDirection: 'row', padding: 16}}>
                <View style={{
                    height: 40,
                    width: 290,
                    marginRight: 16,
                    backgroundColor: '#DCDCDC',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 8,
                    borderRadius: 8,
                }}>
                    <AntDesign name='search1' style={{fontSize: 16, marginRight: 8, marginLeft: 8}}/>
                    <Text style={{fontSize: 16, color: '#696969'}}>Search </Text>
                </View>
                <Button containerStyle={{borderRadius: 8}}>Unread</Button>
            </View>
            {listChat.map((e) => (
                <TouchableHighlight underlayColor={'#F5F5F5'} key={e.chatId} onPress={() => {
                    setIsVisible(true);
                    setE(e);
                    handleFetchMessage(e.chatId)
                }}>
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                        paddingLeft: 16,
                        paddingVertical: 8
                    }}
                    >
                        <Avatar size={60}
                                rounded
                                source={{uri: BASE_SERVER_FILES + e.friend.avatar.fileName}}/>
                        <View style={{marginLeft: 8}}>
                            <Text style={{fontSize: 18}}>{e.friend.username}</Text>
                            <Text>You: {e.lastMessage.content}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            ))}
            <BottomSheet
                onBackdropPress={() => {
                    setIsVisible(!isVisible);
                }}
                modalProps={{}}
                isVisible={isVisible}
            >
                <ListItem>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
                            <Ionicons name={'chevron-back-sharp'}
                                      style={{fontSize: 32, color: 'blue', marginRight: 8}}
                                      onPress={() => setIsVisible(false)}/>
                            <Avatar size={38}
                                    rounded
                                    source={{uri: e.length === 0 ? '' : BASE_SERVER_FILES + e.friend.avatar.fileName}}/>
                            <Text style={{fontSize: 20, marginLeft: 8}}>{e.length === 0 ? '' : e.friend.username}</Text>
                        </View>
                        <View style={{paddingTop: 16, height: 600}}>
                            <ScrollView style={{width: "100%"}}>
                                {dataChat.map((data, index) => (
                                    <View key={data.content + index}>
                                        <View style={{
                                            padding: 8,
                                            borderRadius: 16,
                                            marginBottom: 8,
                                            backgroundColor: data.senderId === AuthID ? '#1877F2' : 'grey',
                                            flexWrap: 'wrap',
                                            alignSelf: data.senderId === AuthID ? 'flex-end' : 'flex-start'
                                        }}>
                                            <Text style={{maxWidth: 250, fontSize: 16, color: 'white'}}>
                                                {data.content}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        <View
                            style={{flexDirection: "row", alignItems: "center", height: 40}}
                        >
                            <TextInput
                                multiline
                                style={{
                                    minHeight: 40,
                                    margin: 24,
                                    borderWidth: 1,
                                    width: 300,
                                    borderRadius: 24,
                                    padding: 10,
                                    paddingLeft: 16,
                                    fontSize: 16
                                }}
                                onChangeText={onChangeMessage}
                                value={message}
                                placeholder="Aa"
                            />
                            <MaterialCommunityIcons
                                name="send"
                                color="#1877F2"
                                style={{fontSize: 32}}
                                onPress={() => handleSendMessage(e)}
                            ></MaterialCommunityIcons>
                        </View>
                    </View>
                </ListItem>
            </BottomSheet>
        </View>
    );
}

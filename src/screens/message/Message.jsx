import * as React from "react";
import {ScrollView, Text, TextInput, TouchableHighlight, View, ActivityIndicator} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Button, Divider, Input,Dialog} from "@rneui/base";
import {useSelector, useDispatch} from "react-redux";
import {authSelector, dataUserMessage, userSeletor} from "../../app/selector";
import {Avatar, BottomSheet, ListItem} from "@rneui/themed";
import {useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useEffect, useRef} from "react";
import messageSlice, {fetchDeleteMessage, fetchListChat, fetchMessage} from "./messageSlice";
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
    const [hiddenDate, setHiddenDate] = useState(false)
    const [indexMessage, setIndexMessage] = useState(null)
    const [visible1, setVisible1] = useState(false);
    const toggleDialog1 = () => {
        setVisible1(!visible1);
    };
    //test
    const [messageTest, setMessageTest] = useState("");

    const socket = io(
        "https://old-facebook-chat-production.up.railway.app", {
            extraHeaders: {
                token: token
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
                "content": message,
                "createdAt": new Date().toISOString(),
            }
            setMessage(null)
            dispatch(messageSlice.actions.addMessage(data))
            // dispatch(fetchMessage(dataChat.chatId))
        }
    }
    console.log("auth ID  : " + AuthID)
    useEffect(() => {
        const messageHandler = (data) => {
            if (data.chatId === dataChat.chatId && data.receiverId === AuthID) {
                dispatch(fetchMessage(data.chatId))
            }
            if (data.chatId) {
                dispatch(fetchListChat())
            }
        }

        socket.on('message', messageHandler)

        return () => {
            socket.off('message', messageHandler)
        }
    }, [socket])

    useEffect(() => {
        dispatch(fetchListChat())
    }, [dispatch])

    const handleFetchMessage = (chatId) => {
        dispatch(fetchMessage(chatId))
        socket.emit('seenMessage', {
            "token": token,
            "chatId": chatId,
        });
    }
    const scrollViewRef = useRef()
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
                        <View style={{marginLeft: 8, width: 280}}>
                            <Text style={{fontSize: 21, fontWeight: !e.seen ? "800" : '700'}}>{e.friend.username}</Text>
                            <Text style={{
                                fontWeight: "500",
                                fontSize: 16,
                                color: !e.seen ? '#1E90FF' : '#696969'
                            }}>{e.lastMessage.senderId === AuthID ? "you : " : ""} {e.lastMessage.content}</Text>
                        </View>

                        {!e.seen &&
                            <View style={{height: 16, width: 16, backgroundColor: '#1E90FF', borderRadius: 16}}/>}
                    </View>
                </TouchableHighlight>
            ))}
            <BottomSheet
                onBackdropPress={() => {
                    setIsVisible(!isVisible);
                    dispatch(messageSlice.actions.resetCurrentChat())
                }}
                modalProps={{}}
                isVisible={isVisible}
            >
                <ListItem>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 8,
                            justifyContent: 'space-between'
                        }}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Ionicons name={'chevron-back-sharp'}
                                          style={{fontSize: 32, color: 'blue', marginRight: 8}}
                                          onPress={() => {
                                              setIsVisible(false);
                                              dispatch(messageSlice.actions.resetCurrentChat())
                                              dispatch(messageSlice.actions.seenMessage(e.chatId))
                                          }}/>
                                <Avatar size={38}
                                        rounded
                                        source={{uri: e.length === 0 ? '' : BASE_SERVER_FILES + e.friend.avatar.fileName}}/>
                                <Text style={{
                                    fontSize: 20,
                                    marginLeft: 8,
                                    fontWeight: "500"
                                }}>{e.length === 0 ? '' : e.friend.username}</Text>
                            </View>
                            <MaterialCommunityIcons name={'delete-alert'} style={{
                                fontSize: 28,
                                color: 'red',
                                marginRight: 4,
                                marginLeft: 4
                            }} onPress={()=>{
                                dispatch(messageSlice.actions.deleteMessage(e.chatId))
                                dispatch(fetchDeleteMessage(e.chatId))
                                setIsVisible(false);
                            }}
                            />
                        </View>
                        <View style={{paddingTop: 16, height: 725}}>
                            <ScrollView ref={scrollViewRef}
                                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: false})}>
                                {dataChat.length === 0 && <View>
                                    <ActivityIndicator size="large"/>
                                </View>}
                                {dataChat.length !== 0 && dataChat.data.map((data, index) => (
                                    <View key={data.content + index} style={{marginBottom: 8}}>
                                        <TouchableHighlight underlayColor="transparent" onPress={() => {
                                            setHiddenDate(!hiddenDate);
                                            setIndexMessage(index)
                                        }}>
                                            <View style={{
                                                padding: 8,
                                                borderRadius: 16,
                                                backgroundColor: data.senderId === AuthID ? '#1877F2' : 'grey',
                                                flexWrap: 'wrap',
                                                alignSelf: data.senderId === AuthID ? 'flex-end' : 'flex-start'
                                            }}>
                                                <Text style={{
                                                    maxWidth: 250,
                                                    fontSize: 18,
                                                    color: 'white',
                                                    fontWeight: "400"
                                                }}>
                                                    {data.content}
                                                </Text>
                                            </View>
                                        </TouchableHighlight>
                                        <View style={{
                                            alignSelf: data.senderId === AuthID ? 'flex-end' : 'flex-start',
                                            paddingLeft: 6,
                                            paddingRight: 6
                                        }}>
                                            {hiddenDate && indexMessage === index &&
                                                <Text>{new Date(data.createdAt).getHours() + ":" + new Date(data.createdAt).getMinutes() + " " + new Date(data.createdAt).getDate() + "/" + new Date(data.createdAt).getMonth()}</Text>
                                            }
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

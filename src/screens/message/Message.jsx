import * as React from "react";
import {ScrollView, Text, TextInput, TouchableHighlight, View} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Button, Divider, Input} from "@rneui/base";
import {useSelector} from "react-redux";
import {dataUserMessage} from "../../app/selector";
import {Avatar, BottomSheet, ListItem} from "@rneui/themed";
import {useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Message() {
    const usersMessage = useSelector(dataUserMessage)
    const [isVisible, setIsVisible] = useState(false);
    const [idUserChat, setIdUserChat] = useState('');
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
            {usersMessage.map((e) => (
                <TouchableHighlight underlayColor={'#F5F5F5'} key={e.user_id} onPress={() => {
                    setIdUserChat(e.user_id);
                    setIsVisible(true);
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
                                source={{uri: e.avatar}}/>
                        <View style={{marginLeft: 8}}>
                            <Text style={{fontSize: 18}}>{e.name}</Text>
                            <Text>You: {e.message}</Text>
                        </View>
                        <BottomSheet
                            onBackdropPress={() => {
                                setIsVisible(!isVisible);
                            }}
                            modalProps={{}}
                            isVisible={isVisible}
                        >
                            <ListItem>
                                <View >
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
                                        <Ionicons name={'chevron-back-sharp'}
                                                  style={{fontSize: 32, color: 'blue', marginRight: 8}}
                                                  onPress={() => setIsVisible(false)}/>
                                        <Avatar size={38}
                                                rounded
                                                source={{uri: e.avatar}}/>
                                        <Text style={{fontSize: 20, marginLeft: 8}}>{e.name}</Text>
                                    </View>
                                </View>
                            </ListItem>
                            <ListItem>
                                <View style={{height: 666}}>
                                    <ScrollView style={{width: "100%"}}></ScrollView>
                                </View>
                            </ListItem>
                            <ListItem>
                                <View
                                    style={{flexDirection: "row", alignItems: "center", height: 40}}
                                >
                                    <TextInput
                                        multiline
                                        style={{
                                            minHeight:40,
                                            margin: 24,
                                            borderWidth: 1,
                                            width: 300,
                                            borderRadius: 24,
                                            padding: 10,
                                            paddingLeft: 16,
                                            fontSize:16
                                        }}
                                        placeholder="Aa"
                                    />
                                    <MaterialCommunityIcons
                                        name="send"
                                        color="#1877F2"
                                        style={{fontSize: 32}}
                                    ></MaterialCommunityIcons>
                                </View>
                            </ListItem>
                        </BottomSheet>
                    </View>
                </TouchableHighlight>
            ))}
        </View>
    );
}


import {useState} from "react";
import {View, TextInput} from "react-native";
import {Avatar} from "@rneui/themed";
import Entypo from "react-native-vector-icons/Entypo";
import {BottomSheet, ListItem, Text} from "@rneui/themed";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Button, Divider} from "@rneui/base";

const authenUser = {
    username: 'NghiaTV',
    avatar: 'https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/305661487_1194341188091112_1645695713395016930_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W_DuuX3bx5gAX-pnAJA&_nc_ht=scontent-hkg4-2.xx&oh=00_AfBJo83lNVrryho2atxL6o7DSP3QeSTASncKzVbbY8yRsQ&oe=63A74253',
}
export default function AddPost() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View>
            <View
                style={{
                    flexDirection: "row",
                    height: 100,
                    alignItems: "center",
                    paddingLeft: 12,
                }}
            >
                <Avatar
                    size={60}
                    rounded
                    source={{uri: "https://randomuser.me/api/portraits/men/35.jpg"}}
                />
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#DCDCDC",
                        height: 36,
                        width: 280,
                        paddingLeft: 16,
                        paddingRight: 16,
                        marginLeft: 24,
                        borderRadius: 6,
                    }}
                >
                    <Text style={{color: "#696969"}} onPress={() => setIsVisible(true)}>
                        What's on your mind ?{" "}
                    </Text>
                    <Entypo name="images" style={{fontSize: 18, color: "grey"}}/>
                </View>
            </View>
            <BottomSheet
                onBackdropPress={() => {
                    setIsVisible(!isVisible);
                }}
                modalProps={{}}
                isVisible={isVisible}
            >
                <ListItem>
                    <View style={{width: '100%', height: 900}}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between", width: '100%', alignItems: 'center'
                        }}>
                            <AntDesign name='close' style={{fontSize: 24}} onPress={() => setIsVisible(false)}/>
                            <Text style={{fontSize: 24, fontWeight: "bold"}}>Create Post</Text>
                            <Button containerStyle={{borderRadius:8,}}>Post</Button>
                        </View>
                        <Divider style={{
                            backgroundColor: "#DCDCDC",
                            height: 0.5,
                            marginTop: 10,
                            marginBottom: 15,
                        }}
                        />
                        <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Avatar size={48} rounded source={{uri: authenUser.avatar}}/>
                                <Text style={{fontSize: 22, marginLeft: 8,}}>{authenUser.username}</Text>
                            </View>
                            <Button containerStyle={{borderRadius:16,}}>Upload File</Button>
                        </View>
                        <TextInput placeholder="What's on your mind ?" multiline style={{fontSize: 18, marginTop: 8}}
                                   autoFocus={true}/>
                    </View>
                </ListItem>
            </BottomSheet>
        </View>
    );
}

import {useState} from "react";
import {Image, View, TextInput, Dimensions, ToastAndroid} from "react-native";
import {Avatar} from "@rneui/themed";
import Entypo from "react-native-vector-icons/Entypo";
import {BottomSheet, ListItem, Text} from "@rneui/themed";
import AntDesign from "react-native-vector-icons/AntDesign";
import {Button, Divider} from "@rneui/base";
import {useDispatch, useSelector} from "react-redux";
import {userAvatarUrl, userNameSelector, userSeletor} from "../../../app/selector";
import * as ImagePicker from "expo-image-picker";
import globalStyle from "../../../styles/globalStyle";
import {createPost} from "../../components/postThunk";

function CreatePost({closeCallback, postId}) {
    const userAvatar = useSelector(userAvatarUrl);
    const userName = useSelector(userNameSelector);
    const dispatch = useDispatch();

    const [status, setStatus] = useState("");
    const [listUploadImage, setListUploadImage] = useState([]);

    const showOutOfLimitToast = () => {
        ToastAndroid.show('Only 3 image can update per post', ToastAndroid.SHORT);
    };

    const handleUpPost = function() {
        let payload = {};
        payload.described = status;
        payload.images = [];
        listUploadImage.forEach((image) => {
            console.log("[handleUpPost] imageUri = " + image.uri);
            payload.images.push(image.base64);
        })
        dispatch(createPost(payload));
    }

    const handlePickImage = async function() {
        let imagePickerOpt = {
            mediaType: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            base64 : true,
            allowsMultipleSelection : true
        }
        try {
            let result = await ImagePicker.launchImageLibraryAsync(imagePickerOpt);
            if (!result.canceled) {
                let response = [];
                if (listUploadImage.length + result.assets.length <= 3) {
                    result.assets.forEach((assetFile) => {
                        let uri = assetFile.uri;
                        let stringSplit = uri.split(".");
                        let imageExtension = stringSplit[stringSplit.length - 1];

                        response.push({
                            uri : uri,
                            base64 : "data:image/" + imageExtension + ";base64," + assetFile.base64
                        })
                    })
                    let currentImages = JSON.parse(JSON.stringify(listUploadImage));
                    for (let image of response) {
                        currentImages.push(image);
                    }
                    setListUploadImage(currentImages);
                } else {
                    showOutOfLimitToast();
                }
            }
        } catch (error) {
            (JSON.stringify(error));
        }
    };

    const handleClose = function() {
        if (closeCallback) {
            closeCallback();
        } else {
            console.log("[CreatePost] - No close call back");
        }
    }

    return (
        <>
            <ListItem>
                <View style={{width: '100%', height: Dimensions.get('window').height}}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: '100%',
                        alignItems: 'center'
                    }}>
                        <AntDesign name='close' style={{fontSize: 24}} onPress={() => handleClose()}/>
                        <Text style={{fontSize: 24, fontWeight: "bold"}}>Create Post</Text>
                        <Button
                            containerStyle={{borderRadius: 8,}}
                            onPress={handleUpPost}
                        >Post</Button>
                    </View>
                    <Divider style={{
                        backgroundColor: "#DCDCDC",
                        height: 0.5,
                        marginTop: 10,
                        marginBottom: 15,
                    }}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Avatar size={48} rounded source={{uri: userAvatar}}/>
                            <Text style={{fontSize: 22, marginLeft: 8,}}>{userName}</Text>
                        </View>
                        <Button
                            containerStyle={{borderRadius: 16,}}
                            onPress={handlePickImage}
                        >Upload</Button>
                    </View>
                    <TextInput
                        onChangeText={(input) => {
                            setStatus(input)
                        }}
                        placeholder="What's on your mind ?"
                        multiline
                        style={{
                            fontSize: 18,
                            marginTop: 8,
                            height : 400,
                            textAlignVertical : "top",
                        }}
                       autoFocus={true}
                    />
                    <View style={{
                        flex : 1,
                        width : "100%",
                        ...globalStyle.row
                    }}>
                        {
                            listUploadImage.map((image, index) => <Image
                                key={"IMAGE_" + index}
                                style={{
                                    height : 100,
                                    width : 100
                                }}
                                source={{uri : image.uri}}
                            />)

                        }
                    </View>
                </View>
            </ListItem>
        </>
    )

}
export default function AddPost({postId}) {
    let userName = useSelector(userNameSelector);
    let userAvatar = useSelector(userAvatarUrl);

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
                    source={{uri : userAvatar}}
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
                <CreatePost
                    closeCallback={() => setIsVisible(false)}
                    postid={postId}
                />
            </BottomSheet>
        </View>
    );
}

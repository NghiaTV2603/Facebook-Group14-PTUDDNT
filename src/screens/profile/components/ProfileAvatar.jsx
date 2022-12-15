import {StyleSheet, Text, View, Image, Dimensions, ImageBackground} from "react-native";

import gStyle from "../../styles/globalStyle";
import * as React from "react";
import {Button, Icon} from "@rneui/base";
import * as ImagePicker from "expo-image-picker";
import {useEffect, useState} from "react";

let styles = StyleSheet.create({
    wallpaper: {
        width: "100%", height: 250,
    }, avatarBorder: {
        width: 180, height: 180, borderRadius: 25, backgroundColor: "white", padding: 5, position: "relative"
    }, name: {
        fontSize: 24, fontWeight: "bold",
    }, uploadButton: {
        width: 35, height: 35, borderRadius: 7, backgroundColor: "#DDDDDD",
    }, avatar: {
        width: "100%", height: "100%", borderRadius: 25,
    }
});

/**
 *
 * @param style
 * @param {function(setStateCallBack)} callBack
 * @returns {JSX.Element}
 * @constructor
 */
function UploadImageButton({style, callBack}) {
    const uploadImage = async function () {
        return true;
    }
    const uploadImageHandler = async function () {
        let imagePickerOpt = {
            mediaType: ImagePicker.MediaTypeOptions.Images, quality: 1
        }
        try {
            let result = await ImagePicker.launchImageLibraryAsync(imagePickerOpt);
            if (!result.cancelled) {
                callBack(result.assets[0].uri);

                // TODO : UPLOAD IMAGE TO SERVER
            }
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    };

    let buttonStyle = (style) ? {...styles.uploadButton, ...style} : styles.uploadButton;
    return (<>
        <Button
            containerStyle={buttonStyle}
            buttonStyle={{backgroundColor: "#DDDDDD"}}
            onPress={uploadImageHandler}
        >
            <Icon name={"camera"} size={17}/>
        </Button>
    </>);
}

function Avatar({style, avatarUrl, name}) {
    let [avatarUri, setAvatar] = useState(avatarUrl);
    return (<>
        <View style={{
            ...gStyle.flexCenter, ...gStyle.column, ...style
        }}>
            <View style={styles.avatarBorder}>
                <Image
                    style={styles.avatar}
                    source={{uri: avatarUri}}
                />
                <UploadImageButton
                    style={{position: "absolute", bottom: 15, right: 15}}
                    callBack={(newImageUri) => {
                        setAvatar(newImageUri)
                    }}
                />
            </View>
            <Text style={styles.name}>{name}</Text>
        </View>
    </>);
};

function WallpaperBackground({children, style, backgroundUrl}) {
    useEffect(() => {
        console.log(backgroundUrl);
    }, [backgroundUrl])
    return (<>
        <View style={{
            ...styles.wallpaper, ...style,
        }}>
            <ImageBackground
                style={{
                    ...gStyle.fullHeight, ...gStyle.fullWidth, position: "relative"

                }}
                source={{uri: backgroundUrl}}
            >
                {children}
            </ImageBackground>
            {children}
        </View>
    </>);
}


let mockImageUrl = "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/313299223_1885202915171278_4674672164289152784_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6I9XAvlVYL8AX8MExoj&_nc_ht=scontent.fhan17-1.fna&oh=00_AfAhHgshmW3YoXputsvx6w0l0WaXjkPIlUnQGVCEUwaiuw&oe=639CAD7B";
let mockBackgroundUrl = "https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-9/186561563_350977789815248_8520365403498685260_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=RCZpHMcgbO8AX8YoDTA&_nc_ht=scontent.fhan17-1.fna&oh=00_AfDx06nz-i0qHZ-HKP0_STYpJ8WKHV0Qj6fSbBxuw2QamQ&oe=63BEC4C4";


export default function ProfileAvatar() {
    let [backgroundUrl, setBackground] = useState(mockBackgroundUrl);
    return (<>
        <View style={{
            height : 349
        }}>
            <WallpaperBackground backgroundUrl={backgroundUrl} >
                <Avatar
                    style={{
                        position: "absolute", bottom: -100, left: Dimensions.get("window").width / 2 - 180 / 2,
                    }}
                    avatarUrl={mockImageUrl}
                    name={"Trần Nhật Minh"}
                />
                <UploadImageButton
                    style={{position: "absolute", bottom: 15, right: 15}}
                    callBack={(newBackgroundUri) => setBackground(newBackgroundUri)}
                />
            </WallpaperBackground>

        </View>
    </>);
}
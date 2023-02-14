import {BottomSheet, Button} from "@rneui/themed";
import {ScrollView, View} from "react-native";
import Profile from "../profile/Profile";

export default function BottomSheetProfile({isVisible, uid, closeCallback, ...props}) {

    const handleCloseBottomSheet = function() {
        if (closeCallback) {
            closeCallback();
        } else {
            ("[BottomSheetProfile] - No close callback");
        }
    }
    return (
        <>
            <BottomSheet isVisible={isVisible}>
                <View style={{
                    backgroundColor: "white", position: "relative"
                }}>
                    <ScrollView
                        stickyHeaderIndices={[0]}
                    >
                        <Button
                            key={"BUTTON 1"}
                            icon={{
                                name: "arrow-left", type: "font-awesome", size: 20, color: "black",
                            }}
                            title={""}
                            onPress={handleCloseBottomSheet}
                            buttonStyle={{
                                backgroundColor: "#EEEEEE",
                            }}
                            containerStyle={{
                                position: "absolute", zIndex: 1000, top: 10, left: 10,
                            }}
                        />
                        <Profile key={"PROFILE"}/>
                    </ScrollView>
                </View>
            </BottomSheet>
        </>
    )

}

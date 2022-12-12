import { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Avatar } from "@rneui/themed";
import Entypo from "react-native-vector-icons/Entypo";
import { BottomSheet, ListItem } from "@rneui/themed";

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
          source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
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
          <Text style={{ color: "#696969" }} onPress={() => setIsVisible(true)}>
            What's on your mind ?{" "}
          </Text>
          <Entypo name="images" style={{ fontSize: 18, color: "grey" }} />
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
          <View style={{ height: 440 }}></View>
        </ListItem>

        <ListItem >
          <View style={{flexDirection:'row',justifyContent:'center'}}>
          </View>
        </ListItem>
      </BottomSheet>
    </View>
  );
}

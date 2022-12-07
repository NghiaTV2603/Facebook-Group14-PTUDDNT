import * as React from "react";
import { Text, View } from "react-native";
import { Avatar } from "@rneui/themed";
import { Divider } from "@rneui/base";

export default function NewFeed({ navigation }) {
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
            backgroundColor: "#DCDCDC",
            height: 36,
            width: 280,
            alignItems: "center",
            paddingLeft: 16,
            marginLeft: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#696969" }}>What's on your mind ?</Text>
        </View>
      </View>
      <Divider style={{ backgroundColor: "#DCDCDC", height: 1 }} />
    </View>
  );
}

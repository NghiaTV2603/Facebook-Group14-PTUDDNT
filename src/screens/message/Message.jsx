import * as React from "react";
import { Text, View } from "react-native";

export default function Message({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Message
      </Text>
    </View>
  );
}

import { Text, View } from "react-native";
import { Avatar } from "@rneui/themed";
import Entypo from "react-native-vector-icons/Entypo";

export default function AddPost() {
  return (
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
        <Text style={{ color: "#696969" }}>What's on your mind ? </Text>
        <Entypo
          name="images"
          style={{ fontSize: 18, color: "grey", marginLeft: 86 }}
        />
      </View>
    </View>
  );
}

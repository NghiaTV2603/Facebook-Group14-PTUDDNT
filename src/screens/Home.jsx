import React from "react";
import NewFeed from "../screens/newFeed/NewFeed";
import Notification from "./notification/Notification";
import Message from "./message/Message";
import { Tab, TabView } from "@rneui/themed";
import Profile from "./profile/Profile";
import { ScrollView } from "react-native";

function Home() {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Home"
          titleStyle={{ fontSize: 9 }}
          icon={{ name: "home", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Notification"
          titleStyle={{ fontSize: 9 }}
          icon={{ name: "mail", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Chat"
          titleStyle={{ fontSize: 9 }}
          icon={{ name: "mail", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Profile"
          titleStyle={{ fontSize: 9 }}
          icon={{ name: "list", type: "ionicon", color: "white" }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <NewFeed />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Notification />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Message />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Profile />
        </TabView.Item>
      </TabView>
    </>
  );
}

export default Home;

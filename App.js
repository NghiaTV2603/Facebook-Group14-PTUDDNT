import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/screens/Home";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
    </SafeAreaView>
  );
}

export default App;

import { StyleSheet, View } from "react-native";
import { BottomNavbar } from "components";
import Market from "screens/Market";

export default function App() {
  return (
    <View style={styles.container}>
      <Market />
      <BottomNavbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    paddingTop: 60,
  },
});

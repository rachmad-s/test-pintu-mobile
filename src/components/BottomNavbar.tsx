import { StyleSheet, Text, View } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const NAV_ITEMS = [
  {
    name: "home",
    label: "Home",
    icon: <FeatherIcon name="home" size={18} />,
  },
  {
    name: "discover",
    label: "Discover",
    icon: <FontAwesomeIcon name="newspaper-o" size={18} />,
  },
  {
    name: "market",
    label: "Market",
    icon: <MaterialIcon name="bar-chart" size={20} />,
    active: true,
  },
  {
    name: "wallet",
    label: "Wallet",
    icon: <SimpleLineIcon name="wallet" size={18} />,
  },
  {
    name: "account",
    label: "Account",
    icon: <FeatherIcon name="user" size={18} />,
  },
];

export const BottomNavbar = () => {
  return (
    <View className="flex flex-row justify-between px-6 bg-white pb-10 pt-2">
      {NAV_ITEMS.map((item) => (
        <View
          className={`flex flex-column items-center justify-between gap-1 ${
            item.active ? "opacity-100" : "opacity-50"
          }`}
          key={item.name}
        >
          {item.icon || ""}
          <Text className={`text-sm ${item.active ? "font-bold" : ""}`}>
            {item.label}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
});

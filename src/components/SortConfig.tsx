import { View, Text } from "react-native";

export const SortConfig = () => {
  return (
    <View className="flex-row justify-between px-4 py-2">
      <Text className="font-semibold">Sort By</Text>
      <Text className="opacity-50">Default</Text>
    </View>
  );
};

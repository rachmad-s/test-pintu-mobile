
import FeatherIcon from "react-native-vector-icons/Feather";
import { View } from "react-native";

export const TitleAction = () => {
  return (
    <View className="flex flex-row gap-4">
      <FeatherIcon name="star" size={24} />
      <FeatherIcon name="search" size={24} />
    </View>
  );
};

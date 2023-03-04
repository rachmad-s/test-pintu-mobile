import { Text, View } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

export const PercentageLabel = ({ n }: { n: string }) => {
  const isPositive = Math.sign(Number(n)) > 0;
  return (
    <View className={`font-bold`}>
      {n ? (
        isPositive ? (
          <View className={`flex flex-row items-center gap-1`}>
            <IonIcons name="caret-up-outline" color={"#25A764"} size={18} />
            <Text className="text-green font-semibold">{n} %</Text>
          </View>
        ) : (
          <View className={`flex flex-row items-center gap-1`}>
            <IonIcons name="caret-down-outline" color={"#E54040"} size={18} />
            <Text className="text-red font-semibold">{n} %</Text>
          </View>
        )
      ) : (
        ""
      )}
    </View>
  );
};

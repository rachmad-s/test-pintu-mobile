import { TokenList } from "definitions";
import { rupiahFormat } from "helper";
import { View, Text } from "react-native";
import { PercentageLabel, CurrencyLogo, AnimationLabel } from "./";

export const CurrencyList: React.FC<{ data: TokenList }> = ({ data }) => {
  return (
    <View>
      {data.map((item) => (
        <View
          className="border-b border-gray py-3 px-4 flex flex-row justify-between"
          key={item.currencySymbol}
        >
          <View className="flex-row gap-2 items-center">
            <CurrencyLogo src={item.logo} color={item.color} />
            <View>
              <Text className="text-lg font-bold">{item.name}</Text>
              <Text className="opacity-40">{item.currencySymbol}</Text>
            </View>
          </View>
          <View className="items-end">
            <AnimationLabel
              price={item.latestPrice}
              changes={item.comparison}
            />
            <PercentageLabel n={item.day} />
          </View>
        </View>
      ))}
    </View>
  );
};

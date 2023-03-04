import { Text, View, ScrollView } from "react-native";
import { TabButtons, TitleAction, SortConfig, CurrencyList } from "components";

const Market = () => {
  return (
    <View>
      <View className="flex flex-row items-center justify-between mb-4 px-4">
        <Text className="text-4xl font-bold">Market</Text>
        <TitleAction />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TabButtons />
        <SortConfig />
        <CurrencyList />
      </ScrollView>
    </View>
  );
};

export default Market;

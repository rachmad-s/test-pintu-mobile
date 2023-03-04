import { Text, View, ScrollView } from "react-native";
import { TabButtons, TitleAction, SortConfig, CurrencyList, BottomNavbar } from "components";
import CurrencyContext from "context/CurrencyContext";
import { useContext } from "react";

const Market = () => {
  const { data } = useContext(CurrencyContext) 

  return data ? (
    <View className="pb-36">
      <View className="flex flex-row items-center justify-between mb-4 px-4">
        <Text className="text-4xl font-bold">Market</Text>
        <TitleAction />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TabButtons />
        <SortConfig />
        <CurrencyList data={data} />
      </ScrollView>
      <BottomNavbar />
    </View>
  ) : <Text>loading</Text>;
};

export default Market;

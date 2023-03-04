import { View, Text } from "react-native";

export const CurrencyList = () => {
  const data = [
    { key: "Devin" },
    { key: "Dan" },
    { key: "Dominic" },
    { key: "Jackson" },
    { key: "James" },
    { key: "Joel" },
    { key: "John" },
    { key: "Jillian" },
    { key: "Jimmy" },
    { key: "Julie" },
    { key: "Julie1" },
    { key: "Julie2" },
    { key: "Julie3" },
    { key: "Julie4" },
    { key: "Julie5" },
  ];
  return (
    <View>
      {data.map((item) => (
        <View className="border-b border-gray py-3 px-4" key={item.key}>
          <Text className="text-lg">{item.key}</Text>
        </View>
      ))}
    </View>
  );
};

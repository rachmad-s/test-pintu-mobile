import { ScrollView, View } from "react-native";
import { Button } from "./Button";
import FeatherIcon from "react-native-vector-icons/Feather";

const TAB_BUTTONS = [
  {
    name: "terbaru",
    label: "Terbaru",
    icon: <FeatherIcon name="home" />,
  },
  {
    name: "defi",
    label: "DeFi",
    icon: <FeatherIcon name="home" />,
  },
  {
    name: "nft",
    label: "NFT/Gaming",
    icon: <FeatherIcon name="home" />,
  },
  {
    name: "cex",
    label: "CEX",
    icon: <FeatherIcon name="home" />,
  },
  {
    name: "dex",
    label: "DEX",
    icon: <FeatherIcon name="home" />,
  },
  {
    name: "layer_1",
    label: "Layer-1",
    icon: <FeatherIcon name="home" />,
  },
  {
    name: "infrastructure",
    label: "Infrastructure",
    icon: <FeatherIcon name="home" />,
  },
  {
    name: "lending",
    label: "Lending",
    icon: <FeatherIcon name="home" />,
  },
  {
    name: "layer_2",
    label: "Layer-2",
    icon: <FeatherIcon name="home" />,
  },
  {
    name: "stablecoin",
    label: "Ekosistem Stablecoin",
    icon: <FeatherIcon name="home" />,
  },
];

export const TabButtons = () => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        className="h-12"
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row gap-x-5 px-7 pt-1">
          {TAB_BUTTONS.map((button) => (
            <Button label={button.label} key={button.name} icon={button.icon} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

import { Text, TouchableHighlight, View } from "react-native";

interface ButtonProps {
  label: string;
  icon: JSX.Element;
  className?: string;
}

export const Button = ({ label, icon, className } : ButtonProps) => {
  return (
    <TouchableHighlight className={className}>
      <View className="flex-row gap-1 items-center mx-1 border border-gray px-2 pt-1 pb-2 rounded-2xl">
        {icon}
        <Text>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

import { StyleSheet, Text, Animated, LayoutAnimation } from "react-native";
import { rupiahFormat } from "helper";
import { useEffect, useState } from "react";

export const AnimationLabel: React.FC<{ price: string; changes?: string }> = ({
  price,
  changes,
}) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const color =
    changes === "down"
      ? "rgb(229, 64, 64)"
      : changes === "up"
      ? "rgb(37, 167, 100)"
      : "rgb(0,0,0)";

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(0,0,0)", color],
  });
  const animatedStyle = {
    color: boxInterpolation,
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    });
  }, [changes]);

  return (
    <Animated.Text
      className="text-lg font-semibold"
      style={{ color: animatedStyle.color }}
    >
      {rupiahFormat(price)}
    </Animated.Text>
  );
};

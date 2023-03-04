import { SvgUri } from "react-native-svg";

export const CurrencyLogo = ({ src, color }: { src: any; color: string }) => {
  return <SvgUri uri={src} width="32" color={color} height="32" />;
};

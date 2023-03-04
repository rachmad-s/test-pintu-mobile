import CurrencyContext from "context/CurrencyContext";
import useTokenList from "hooks/TokenList";
import { Text } from "react-native";

const Middleware = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const { isLoading, error, data } = useTokenList();
  if (isLoading) return <Text className="text-center">Loading</Text>;
  return (
    <CurrencyContext.Provider value={{ isLoading, error, data }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default Middleware;

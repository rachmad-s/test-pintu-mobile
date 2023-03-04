import { StyleSheet, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";

import Market from "screens/Market";
import Middleware from "middleware";

const queryClient = new QueryClient();

export default function App() {
  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <Middleware>
          <Market />
        </Middleware>
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    paddingTop: 50,
  },
});

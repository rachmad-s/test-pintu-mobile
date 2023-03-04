import { Filter, TokenList } from "definitions";
import { createContext } from "react";

interface ContextInterface {
  isLoading: boolean;
  error: boolean | unknown;
  data: TokenList;
}

const CurrencyContext = createContext<ContextInterface>({
  isLoading: true,
  error: false,
  data: [],
});

export default CurrencyContext;

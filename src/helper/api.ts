export const getCurrencies = () =>
  fetch("https://api.pintu.co.id/v2/wallet/supportedCurrencies").then((response) => response.json());

export const getPriceChanges = () =>
  fetch("https://api.pintu.co.id/v2/trade/price-changes").then((response) => {
    return response.json();
  });

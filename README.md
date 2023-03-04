
# ReadMe

Frontend test (Mobile App) by Rachmad Syaefullah 


## Tech Stack

**Language:** Typescript/Javascript

**Framework:** react-native

**Libraries:** 
- HTTP Request - `react-query`
- CSS - `Tailwindcss`
- Icons - `react-native-vector-icon`
- Linter - `eslint` *(airbnb template)*



## Documentation

About the app, its basically replicated from https://pintu.co.id/market to show available Cryptocurrencies at Pintu

Its given two data from API:
- Supported Currencies

    `https://api.pintu.co.id/v2/wallet/supportedCurrencies`
- Price Changes

    `https://api.pintu.co.id/v2/trade/price-changes`

**Flow**

To reach the goal of displays those two data to the Market Page, I need to join those Arrays into single Array, and its connected by `currencySymbol` key. After the data joined, I saved it to state which is using `React Hooks` and store it to `Context` to be consumed by its Children components. While the data is saving into the state, I also put logic to get price comparison between each state and mark it as `'up'`, `'down'`, and `'equal'`. These marks will be used in the component to trigger CSS Animation color whether the price is going up or down from before price. 

**Feature Improvement / Additional Feature**

*Because the time is limited, I only add additional feature and improvement to the web version*

## Run Locally

Clone the project

```bash
  git clone https://github.com/rahmatsya/test-pintu-mobile
```

Go to the project directory

```bash
  cd test-pintu-mobile
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Demo

*none*


## Deployment

*none*

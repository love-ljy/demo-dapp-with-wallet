import './App.scss';
import './trackers';
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json"
      uiPreferences={{theme: THEME.DARK}}
      walletsListConfiguration={{
        includeWallets: [
           {
            appName: 'Gate Wallet',
            name: 'Gate Wallet Lite',
            imageUrl: 'https://raw.githubusercontent.com/bitgetwallet/download/main/logo/png/bitget_wallet_lite_logo.png',
            aboutUrl: 'https://web3.bitget.com',
            universalLink: 'https://t.me/gateio_dev_bot/tgwallet_test_env?attach=wallet',
            bridgeUrl: 'https://dapp.gateio.services/tonbridge_api/bridge/v1',
            platforms: ['ios', 'android', 'macos', 'windows', 'linux']
          }
        ]
      }}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/tc_twa_demo_bot/start'
      }}
    >
      <div className="app">
        <Header/>
        <TxForm/>
        {/*<TonProofDemo />*/}
        <Footer/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App

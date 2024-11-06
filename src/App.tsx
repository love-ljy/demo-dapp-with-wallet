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
            imageUrl: 'https://gimg2.gateimg.com/tgwallet/1730688473495507406-Gatewallet.png',
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

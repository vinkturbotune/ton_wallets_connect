import { useState, ReactNode, createContext, FC } from 'react';
import { ConfigType, GameContextType as AppContextType } from './AppProvider.types';
import { useTelegram } from '../TelegramProvider/TelegramProvider';
import { useTonConnectUI, ConnectedWallet } from '@tonconnect/ui-react';

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<{ config: ConfigType; children: ReactNode }> = ({ config, children }) => {
  // const { beginCell, toNano } = require('@ton/ton');
  const [connectedWalletAndwalletInfo, setConnectedWalletAndwalletInfo] = useState<ConnectedWallet | null>(null);
  const { telegramUserId, webApp, user } = useTelegram();
  const [tonConnectUI] = useTonConnectUI();

  tonConnectUI.onStatusChange((walletAndwalletInfo) => {
    setConnectedWalletAndwalletInfo(walletAndwalletInfo);
  });

  console.log('telegramUserId', telegramUserId);
  console.log('user', user);
  // console.log('webApp', webApp);

  // const sendDepositRequest = async () => {
  //   // await tonConnectUI.openSingleWalletModal('telegram-wallet');
  //   // await tonConnectUI.openSingleWalletModal('tonkeeper');

  //   if (telegramUserId) {
  //     const result = await fetchDepositRequest(telegramUserId);
  //     if ('reference' in result) {
  //       const destinationAddress =
  //         result.network === APP_NETWORKS.MAINNET
  //           ? process.env.REACT_APP_MAINNET_DESTINATION_ADDRESS
  //           : process.env.REACT_APP_TESTNET_DESTINATION_ADDRESS;
  //       const body = beginCell()
  //         .storeUint(0, 32) // write 32 zero bits to indicate that a text comment will follow
  //         .storeStringTail(result.reference) // write our text comment
  //         .endCell();
  //       const transaction: SendTransactionRequest = {
  //         validUntil: Math.floor(Date.now() / 1000) + 360,
  //         messages: [
  //           {
  //             address: destinationAddress || '',
  //             amount: toNano(Number(selectedDepositAmount)).toString(),
  //             payload: body.toBoc().toString('base64'),
  //           },
  //         ],
  //       };
  //       console.log('transaction', transaction);
  //       try {
  //         const trxResult = await tonConnectUI.sendTransaction(transaction);
  //         console.log('trxResult', trxResult);
  //       } catch (error) {
  //         console.error(' sendTransaction error', error);
  //       }
  //     }
  //   }
  // };

  const value: AppContextType = {
    connectedWalletAndwalletInfo,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

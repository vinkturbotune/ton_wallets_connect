import React from 'react';
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';

import { AppProvider } from './providers/AppProvider/AppProvider';
import { TelegramProvider } from './providers/TelegramProvider/TelegramProvider';
import Main from './components/Main/Main';

function App() {
  const config = {};

  return (
    <TelegramProvider>
      <TonConnectUIProvider
        uiPreferences={{ theme: THEME.DARK }}
        manifestUrl={`https://jetlix.space/tonconnect-manifest.json`}
      >
        <AppProvider config={config}>
          <Main></Main>
        </AppProvider>
      </TonConnectUIProvider>
    </TelegramProvider>
  );
}

export default App;

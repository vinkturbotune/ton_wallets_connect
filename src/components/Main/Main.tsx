import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import { useTonConnectUI, TonConnectButton, useTonAddress, useTonWallet } from '@tonconnect/ui-react';
import { useTelegram } from '../../providers/TelegramProvider/TelegramProvider';

function Main() {
  const [tonConnectUI] = useTonConnectUI();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const { telegramUserId } = useTelegram();

  //  TON          UQATTFgrygPAdSwoSJquE2P0U1Ubj9cp_KMRIbNDWbl_xdTs
  //  TON wallet   UQBkL9us8uvfGLinEkr-LRcEA8DmpzSnn_164AM4S11O918N
  //  TON keeper   0QBzpBuGT0bXSB51YqHvmkvAXPj88k4N-zvXxZfK5k3Xdpu7

  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          maxWidth: '700px',
          width: '100%',
          margin: 'auto',
          position: 'relative',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '20px',
        }}
      >
        <Typography>Telegram user ID:</Typography>
        <Typography>{telegramUserId}</Typography>
        <br />
        <TonConnectButton />
        <br />

        <Typography>User-friendly address:</Typography>
        <Typography sx={{ fontSize: '12px' }}>{userFriendlyAddress}</Typography>
        <br />
        <Typography>Raw address:</Typography>
        <Typography sx={{ fontSize: '12px' }}>{rawAddress}</Typography>
        <br />

        <Typography>Connected wallet: {wallet && 'name' in wallet && wallet.name}</Typography>
        <Typography>Device: {wallet?.device.appName}</Typography>
        <br />

        <Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={async (e) => {
              e.preventDefault();
              if (tonConnectUI.connected) {
                await tonConnectUI.disconnect();
              }
            }}
          >
            Disconnect wallet
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;

import { APP_NETWORKS } from '../utils/constants';
import { decrypt_pub, encrypt_pub } from '../utils/encrypt';

const APP_URLS = {
  saveData: '',
};

export const saveData = (
  data: any
): Promise<{ network: keyof typeof APP_NETWORKS; deposit: number } | { error: string } | any> =>
  fetch(APP_URLS.saveData, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      'x-api-token': process.env.REACT_APP_X_API_TOKEN || '',
    },
    body: 'encrypt_pub(JSON.stringify({ id }))',
  })
    .then((res) => res.text())
    .then((res) => {
      return 'JSON.parse(decrypt_pub(res))';
    })
    .catch((err) => {
      console.log('fetchBalance err', err);
    });

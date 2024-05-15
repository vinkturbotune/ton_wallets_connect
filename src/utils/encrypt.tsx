// import * as crypto from 'crypto';

const serverPubKey = process.env.REACT_APP_SERVER_PUBLIC_KEY;
const clientPubKey = process.env.REACT_APP_CLIENT_PUBLIC_KEY;

export function encrypt_pub(data: string) {
  // return crypto.publicEncrypt(clientPubKey || '', Buffer.from(data)).toString('base64');
}

export function decrypt_pub(data: string) {
  // return crypto.publicDecrypt(serverPubKey || '', Buffer.from(data, 'base64')).toString();
}

export enum StorageKeys {
  Connected = 'connected',
}

export enum Routes {
  Blog = '/blog',
  Home = '/',
  Write = '/blog/write',
}

export const CONTRACT_ADDRESS = '0x01e9118E7faa905C4367Ece944D0f1676d41CAfb';
export const CHAIN_ID = 11155111n;

export const ERRORS = {
  GENERIC: 'Something went wrong',
  INCOMPLETE_FIELDS: 'Please fill out all fields',
  DONATE: 'Transaction failed! Please try again',
};

export const SUCCESS_MESSAGES = {
  DONATE: 'Transaction successful!',
};

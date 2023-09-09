export enum StorageKeys {
  Connected = 'connected',
}

export enum Routes {
  Blog = '/blog',
  Write = '/blog/write',
}

export const CONTRACT_ADDRESS = '0x75Eb1873498522202173fBc5620263D0365a94B5';
export const CHAIN_ID = 1337n;

export const ERRORS = {
  GENERIC: 'Something went wrong',
  INCOMPLETE_FIELDS: 'Please fill out all fields',
  DONATE: 'Transaction failed! Please try again',
};

export const SUCCESS_MESSAGES = {
  DONATE: 'Transaction successful!',
};

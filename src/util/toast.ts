import { toast, ToastOptions } from 'react-toastify';

import { ERRORS } from '@/constants';

export const displayError = (msg?: string, options?: ToastOptions) => {
  msg = msg || ERRORS.GENERIC;
  toast(msg, { ...options, type: 'error' });
};

export const displaySuccess = (msg: string, options?: ToastOptions) => {
  toast(msg, { ...options, type: 'success' });
};

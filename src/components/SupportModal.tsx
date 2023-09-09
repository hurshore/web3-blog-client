import { useState } from 'react';
import { parseEther } from 'ethers';

import SubmitButton from './buttons/SubmitButton';
import useBooleanState from '@/hooks/useBooleanState';
import { getEthereumContract } from '@/util/eth';
import { ERRORS, SUCCESS_MESSAGES } from '@/constants';
import { displayError, displaySuccess } from '@/util/toast';

type Props = {
  author: string;
  isVisible: boolean;
  onClose: () => void;
};

const buttonText = 'Send';
const placeholder = 'Amount in ETH';

const SupportModal = ({ author, isVisible, onClose }: Props) => {
  const [isLoading, startLoading, stopLoading] = useBooleanState();
  const [amount, setAmount] = useState<string>('');
  if (!isVisible) return null;

  const onSubmit = async () => {
    try {
      startLoading();
      const contract = await getEthereumContract();
      const amountInWei = parseEther(amount);
      const tx = await contract?.donateToAuthor(author, { value: amountInWei });
      const receipt = await tx.wait();
      stopLoading();

      if (receipt.status !== 1) return displayError(ERRORS.DONATE);

      displaySuccess(SUCCESS_MESSAGES.DONATE);
      onClose();
    } catch (error) {
      stopLoading();
      displayError(ERRORS.DONATE);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50"
      ></div>
      <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-800 rounded-2xl p-8 w-3/4 max-w-lg">
        <h1 className="text-2xl text-beige font-margarine text-center mb-8">
          Support Creator
        </h1>
        <input
          type="number"
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full mb-5 px-2 py-3 rounded-xl bg-transparent border"
        />
        <SubmitButton
          className="mt-0"
          title={buttonText}
          onClick={onSubmit}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default SupportModal;

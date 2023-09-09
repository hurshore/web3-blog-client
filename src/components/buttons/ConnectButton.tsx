'use client';

type Props = {
  connectWallet: () => void;
};

const ConnectButton = ({ connectWallet }: Props) => (
  <button
    className="bg-pink-500 hover:bg-pink-700 px-4 py-2 rounded-xl text-xs"
    onClick={connectWallet}
  >
    Connect
  </button>
);

export default ConnectButton;

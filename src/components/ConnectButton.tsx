'use client';

interface Props {
  connectWallet: () => void;
}

const ConnectButton = ({ connectWallet }: Props) => {
  return (
    <button
      onClick={connectWallet}
      className="bg-pink-500 hover:bg-pink-700 px-4 py-2 rounded-xl text-xs"
    >
      Connect
    </button>
  );
};

export default ConnectButton;

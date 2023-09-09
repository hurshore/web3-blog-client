'use client';
import useConnectWallet from '@/hooks/useConnectWallet';

const JoinButton = () => {
  const { connectWallet } = useConnectWallet();
  return (
    <button
      onClick={connectWallet}
      className="w-full bg-purple-500 hover:bg-purple-700 px-8 py-3 rounded-xl mt-8"
    >
      Join Today
    </button>
  );
};

export default JoinButton;

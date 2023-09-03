'use client';

type Props = {
  isLoading?: boolean;
  title: string;
  onClick: () => void;
};

export default ({ isLoading = false, title, onClick }: Props) => {
  title = isLoading ? 'Loading...' : title;
  return (
    <div className="flex self-center w-full max-w-[500px] mt-16">
      <button
        className="w-full bg-pink-500 hover:bg-pink-700 px-8 py-3 rounded-xl"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

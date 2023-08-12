'use client';

const buttonText = 'Support Creator';
export default () => {
  const supportCreator = () => {};
  return (
    <div className="flex self-center w-full max-w-[500px] mt-16">
      <button
        className="w-full bg-pink-500 hover:bg-pink-700 px-8 py-3 rounded-xl"
        onClick={supportCreator}
      >
        {buttonText}
      </button>
    </div>
  );
};

'use client';
import { cn } from '@/util/style';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Props = ButtonProps & {
  isLoading?: boolean;
  title: string;
  onClick: () => void;
};

const SubmitButton = ({
  className,
  isLoading = false,
  title,
  onClick,
}: Props) => {
  title = isLoading ? 'Loading...' : title;
  return (
    <button
      className={cn(
        'w-full max-w-lg mx-auto mt-16 bg-pink-500 hover:bg-pink-700 px-8 py-3 rounded-xl',
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SubmitButton;

import { cn } from '@/util/style';
import { useState } from 'react';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = Omit<TextAreaProps, 'onChange'> & {
  onChange: (val: string) => void;
};

const ResizeableTextInput = ({ className, onChange, ...otherProps }: Props) => {
  const [height, setHeight] = useState<number>();

  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHeight(e.target.scrollHeight);
    onChange(e.target.value);
  };

  return (
    <textarea
      className={cn(
        'w-full px-8 mb-4 text-xl bg-transparent outline-none resize-none',
        className
      )}
      style={{ height: `${height}px` }}
      onChange={onContentChange}
      {...otherProps}
    />
  );
};

export default ResizeableTextInput;

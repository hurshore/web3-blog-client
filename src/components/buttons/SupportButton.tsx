'use client';
import SubmitButton from './SubmitButton';

const buttonText = 'Support Creator';
const SupportButton = () => {
  const supportCreator = () => {};

  return <SubmitButton title={buttonText} onClick={supportCreator} />;
};

export default SupportButton;

'use client';
import SubmitButton from './SubmitButton';

const buttonText = 'Support Creator';
export default () => {
  const supportCreator = () => {};

  return <SubmitButton title={buttonText} onClick={supportCreator} />;
};

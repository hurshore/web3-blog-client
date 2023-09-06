'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import ResizeableTextInput from '@/components/ResizeableTextInput';
import SubmitButton from '@/components/buttons/SubmitButton';
import useBooleanState from '@/hooks/useBooleanState';
import { getEthereumContract } from '@/util/eth';
import { ERRORS, Routes } from '@/constants';

enum Placeholders {
  Title = 'Title',
  Content = 'Tell your story...',
}
const buttonText = 'Publish';

export default () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, startLoading, stopLoading] = useBooleanState();
  const router = useRouter();

  const onContentChange = (value: string) => {
    setContent(value);
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const publishPost = async () => {
    if (!postIsValid()) {
      toast(ERRORS.INCOMPLETE_FIELDS, { type: 'error' });
      return;
    }

    try {
      startLoading();
      const contract = await getEthereumContract();
      const tx = await contract?.createPost(title, content);
      await tx.wait();
      stopLoading();
      router.push(Routes.Blog);
    } catch (error) {
      stopLoading();
      toast(ERRORS.GENERIC, { type: 'error' });
    }
  };

  const postIsValid = (): boolean => {
    return title.trim().length > 0 && content.trim().length > 0;
  };

  return (
    <section className="flex flex-col max-w-5xl min-h-screen pt-10 mx-auto">
      <div>
        <input
          className="w-full px-8 py-4 mb-4 text-4xl bg-transparent outline-none text-beige font-margarine"
          placeholder={Placeholders.Title}
          onChange={onTitleChange}
          value={title}
        />
        <ResizeableTextInput
          placeholder={Placeholders.Content}
          onChange={onContentChange}
          value={content}
        />
      </div>
      <SubmitButton
        title={buttonText}
        onClick={publishPost}
        isLoading={isLoading}
      />
    </section>
  );
};

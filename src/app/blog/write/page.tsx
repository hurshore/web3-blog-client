'use client';
import React, { useState } from 'react';

import SubmitButton from '@/components/buttons/SubmitButton';
import useBooleanState from '@/hooks/useBooleanState';
import { getEthereumContract } from '@/util/eth';

enum Placeholders {
  Title = 'Title',
  Content = 'Tell your story...',
}
const buttonText = 'Publish';

export default () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [height, setHeight] = useState<number>();
  const [isLoading, startLoading, stopLoading] = useBooleanState();

  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHeight(e.target.scrollHeight);
    setContent(e.target.value);
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const publishPost = async () => {
    if (!postIsValid()) {
      // TODO: show error message
      alert('Please fill out all fields');
      return;
    }

    try {
      startLoading();
      const contract = await getEthereumContract();
      const tx = await contract?.createPost(title, content);
      await tx.wait();
      stopLoading();
      // TODO: go to blog page
    } catch (error) {
      stopLoading();
      console.log(error);
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
        <textarea
          className="w-full px-8 mb-4 text-xl bg-transparent outline-none resize-none"
          placeholder={Placeholders.Content}
          style={{ height: `${height}px` }}
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

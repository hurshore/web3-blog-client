'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import ResizeableTextInput from '@/components/ResizeableTextInput';
import SubmitButton from '@/components/buttons/SubmitButton';
import Tag from '@/components/Tag';
import useBooleanState from '@/hooks/useBooleanState';
import { getEthereumContract } from '@/util/eth';
import { ERRORS, Routes } from '@/constants';
import { displayError } from '@/util/toast';

enum Placeholders {
  Title = 'Title',
  Content = 'Tell your story...',
  Tag = 'Tag',
}

enum Fields {
  Title = 'title',
  Content = 'content',
  Tags = 'tags',
  Tag = 'tag',
}

type PostBody = {
  title: string;
  content: string;
  tags: string[];
  tag: string;
};

const initialPostBody: PostBody = {
  title: '',
  content: '',
  tags: [],
  tag: '',
};

const buttonText = 'Publish';
const WritePage = () => {
  const [body, setBody] = useState<PostBody>(initialPostBody);
  const [isLoading, startLoading, stopLoading] = useBooleanState();
  const router = useRouter();

  const onFieldChange = (field: string) => (value: string) => {
    setBody({ ...body, [field]: value });
  };

  const onContentChange = (value: string) => {
    onFieldChange(Fields.Content)(value);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange(e.target.name)(e.target.value);
  };

  const onTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && body.tags.length < 3) {
      setBody({ ...body, tags: [...body.tags, body.tag], tag: '' });
    }
  };

  const deleteTag = (tag: string) => {
    setBody({ ...body, tags: body.tags.filter((t) => t !== tag) });
  };

  const publishPost = async () => {
    if (!postIsValid()) return displayError(ERRORS.INCOMPLETE_FIELDS);

    let { title, content, tags } = body;
    (title = title.trim()), (content = content.trim());
    try {
      startLoading();
      const contract = await getEthereumContract();
      const tx = await contract?.createPost(title, content, tags);
      const receipt = await tx.wait();
      stopLoading();

      if (receipt.status !== 1) return displayError();

      router.push(Routes.Blog);
    } catch (error) {
      stopLoading();
      displayError();
    }
  };

  const postIsValid = (): boolean => {
    return body.title.trim().length > 0 && body.content.trim().length > 0;
  };

  return (
    <section className="flex flex-col max-w-5xl min-h-screen pt-10 mx-auto">
      <div>
        <input
          className="w-full px-8 py-4 mb-4 text-4xl bg-transparent outline-none text-beige font-margarine"
          placeholder={Placeholders.Title}
          onChange={onInputChange}
          name={Fields.Title}
          value={body.title}
        />
        <ResizeableTextInput
          placeholder={Placeholders.Content}
          onChange={onContentChange}
          value={body.content}
        />
        <div className="px-8 mt-5">
          <h3 className="text-lg text-beige font-margarine">Add Tags</h3>
          <input
            className="w-full py-4 mb-4 bg-transparent outline-none"
            placeholder={Placeholders.Tag}
            onKeyPress={onTagKeyPress}
            onChange={onInputChange}
            name={Fields.Tag}
            value={body.tag}
          />
          <div className="flex">
            {body.tags.map((tag) => (
              <Tag key={tag} tag={tag} onClick={() => deleteTag(tag)} />
            ))}
          </div>
        </div>
      </div>
      <SubmitButton
        title={buttonText}
        onClick={publishPost}
        isLoading={isLoading}
      />
    </section>
  );
};

export default WritePage;

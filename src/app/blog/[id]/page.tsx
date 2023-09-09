'use client';
import useSWR from 'swr';

import SubmitButton from '@/components/buttons/SubmitButton';
import SupportModal from '@/components/SupportModal';
import useBooleanState from '@/hooks/useBooleanState';
import useConnectWallet from '@/hooks/useConnectWallet';
import { getEthereumContract } from '@/util/eth';
import { areStringsEqual } from '@/util/string';
import { getPostDate } from '@/util/date';
import { Post } from '@/models/Blog';
import { toPost } from '@/dtos/post';

type Props = {
  params: { id: string };
};

const fetchPost = async (id: number): Promise<Post> => {
  const contract = await getEthereumContract();
  let post = await contract?.getPost(id);
  post = toPost(post);
  return post;
};

const buttonText = 'Support Creator';

const PostPage = ({ params }: Props) => {
  const [isModalOpen, openModal, closeModal] = useBooleanState();
  const { currentAccount } = useConnectWallet();
  const { data: post } = useSWR(`/post/${params.id}`, () =>
    fetchPost(parseInt(params.id))
  );
  if (!post) return null;
  const { day, month, year } = getPostDate(post.timestamp);
  const isAuthor = currentAccount
    ? areStringsEqual(currentAccount, post.author)
    : false;

  return (
    <div className="flex flex-col">
      <article className="max-w-5xl">
        <section className="mb-8">
          <h1 className="text-2xl md:text-3xl text-beige font-margarine mt-8 mb-1">
            {post.title}
          </h1>
          <div className="flex">
            <p className="text-neutral-400 text-sm">written by&nbsp;</p>
            <p className="flex-1 text-neutral-400 text-sm text-ellipsis overflow-hidden">
              {post.author}
            </p>
          </div>
          <p className="text-neutral-400 text-sm">
            on {day} {month} {year}
          </p>
        </section>
        <p>{post.content}</p>
      </article>
      {!isAuthor && <SubmitButton title={buttonText} onClick={openModal} />}
      <SupportModal
        author={post.author}
        isVisible={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default PostPage;

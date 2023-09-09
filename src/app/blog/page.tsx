'use client';
import useSWR from 'swr';

import Post from '@/components/Post';
import { Post as PostModel } from '@/models/Blog';
import { getEthereumContract } from '@/util/eth';
import { toPosts } from '@/dtos/post';

const fetchPosts = async (): Promise<PostModel[]> => {
  const contract = await getEthereumContract();
  let posts = await contract?.getPosts();
  posts = toPosts(posts);
  return posts.reverse();
};

const BlogPage = () => {
  const { data: posts } = useSWR('/posts', fetchPosts);

  return (
    <section className="max-w-5xl">
      <h1 className="text-2xl text-beige font-margarine mt-8 mb-6 text-center">
        All Works
      </h1>
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default BlogPage;

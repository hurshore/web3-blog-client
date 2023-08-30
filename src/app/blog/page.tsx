'use client';
import { useEffect, useState } from 'react';

import Post from '@/components/Post';
import { Post as PostModel } from '@/models/Blog';
import { getEthereumContract } from '@/util/eth';
import { toPosts } from '@/dtos/post';

export default () => {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const contract = await getEthereumContract();
      let posts = await contract?.getPosts();
      posts = toPosts(posts);
      setPosts(posts.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-5xl">
      <h1 className="text-2xl text-beige font-margarine mt-8 mb-6 text-center">
        All Works
      </h1>
      {posts.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </section>
  );
};

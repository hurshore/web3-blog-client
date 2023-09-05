type Post = {
  id: bigint;
  title: string;
  content: string;
  author: string;
  timestamp: bigint;
  tags: string[];
};

export const toPost = (post: Post) => ({
  id: parseInt(post.id.toString()),
  title: post.title,
  content: post.content,
  author: post.author,
  timestamp: parseInt(post.timestamp.toString()) * 1000,
  tags: [],
});

export const toPosts = (posts: any[]) => {
  return posts.map((post) => toPost(post));
};

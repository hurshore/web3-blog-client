export const toPost = (
  title: string,
  content: string,
  timestamp: bigint,
  tags: string[]
) => ({
  title,
  content,
  timestamp: parseInt(timestamp.toString()) * 1000,
  tags,
});

export const toPosts = (posts: any[]) => {
  return posts.map((post) =>
    toPost(post.title, post.content, post.timestamp, [])
  );
};

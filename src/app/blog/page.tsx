import Post from '@/components/Post';

const posts = [
  {
    id: 1,
    title: '15 Disadvantages Of Freedom And How You Can Workaround It.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    timestamp: '2019-01-02 12:00:00',
    author: '0xBc6a8236e05059eAC3fa123626020F279a6d32AA',
    tags: ['meditation', 'mentalpeace'],
  },
  {
    id: 2,
    title: '15 Disadvantages Of Freedom And How You Can Workaround It.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    timestamp: '2019-01-01 12:00:00',
    author: '0xBc6a8236e05059eAC3fa123626020F279a6d32AA',
    tags: ['meditation', 'mentalpeace'],
  },
];

export default () => (
  <section className="max-w-5xl">
    <h1 className="text-2xl text-beige font-margarine mt-8 mb-6 text-center">
      All Works
    </h1>
    {posts.map((post) => (
      <Post key={post.title} post={post} />
    ))}
  </section>
);

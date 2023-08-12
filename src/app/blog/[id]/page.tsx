import { SupportButton } from '@/components/buttons';
import { getDayMonthYear } from '@/util/date';

const post = {
  id: 1,
  title: '15 Disadvantages Of Freedom And How You Can Workaround It.',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  timestamp: '2019-01-02 12:00:00',
  author: '0xBc6a8236e05059eAC3fa123626020F279a6d32AA',
  tags: ['meditation', 'mentalpeace'],
};

export default () => {
  const { day, month, year } = getDayMonthYear(post.timestamp);
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
      <SupportButton />
    </div>
  );
};

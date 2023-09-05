import Link from 'next/link';
import Tag from './Tag';
import { getPostDate } from '@/util/date';
import { Post } from '@/models/Blog';

interface Props {
  post: Post;
}

export default ({ post }: Props) => {
  const { day, month } = getPostDate(post.timestamp);

  return (
    <article className="flex mb-8">
      <div className="flex flex-col items-end mr-4">
        <div className="flex flex-col items-end">
          <p className="text-xl font-bold">{day}</p>
          <p className="text-xl font-bold">{month}</p>
        </div>
      </div>
      <div>
        <Link href={`/blog/${post.id}`}>
          <h2 className="font-margarine text-beige mb-2">{post.title}</h2>
        </Link>
        <p className="text-xs md:text-sm line-clamp-6">{post.content}</p>
        <div className="flex mt-2">
          {post.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </article>
  );
};

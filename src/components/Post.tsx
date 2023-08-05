import Link from 'next/link';
import Tag from './Tag';

interface Post {
  id: number;
  title: string;
  content: string;
  timestamp: string;
  tags: string[];
}

interface Props {
  post: Post;
}

export default ({ post }: Props) => {
  const date = new Date(post.timestamp);
  let day: number | string = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  if (day < 10) day = '0' + day;

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

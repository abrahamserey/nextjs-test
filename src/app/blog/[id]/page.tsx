import { DatabaseOperations } from '@/src/database/operations';
import Link from 'next/link';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function PostPage(props: PageProps) {
  const urlProps = await props.params;
  const id = urlProps.id;

  const operations = new DatabaseOperations();
  const post = await operations.getSingleBlogPost(Number(id));

  return (
    <div className="flex flex-col gap-20">
      <h1 className="text-5xl ">{post.title}</h1>
      <div>{post.text}</div>
      <Link href="/">↢Back</Link>
    </div>
  );
}

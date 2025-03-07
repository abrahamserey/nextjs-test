import Link from 'next/link';
import { DatabaseOperations } from '../database/operations';
import { CreatePost } from './components/Blog/CreatePost';
import { SignedIn } from '@clerk/nextjs';

export default async function Home() {
  const operations = new DatabaseOperations();
  const posts = await operations.getBlogPosts();

  return (
    <div>
      <SignedIn>
        <CreatePost />
      </SignedIn>
      <div className="flex flex-col gap-20">
        {posts.map((post) => (
          <div className="flex flex-col gap-4" key={post.id}>
            <h3 className="underline underline-offset-4 text-blue-500 text-3xl">{post.title}</h3>
            <div>{post.text.substring(0, 100)}...</div>
            <Link href={`/blog/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

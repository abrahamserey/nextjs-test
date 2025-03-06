import Link from "next/link";
import { DatabaseOperations } from "../database/operations";

export default async function Home() {

  const operations = new DatabaseOperations();
  const posts = await operations.getBlogPosts();

  return (
    <div>
     This is my home page. Here are my blog posts:

     <div className="overflow-clip transition-all duration-700 empty:hidden dark:text-inherit" style={{minWidth:400}}>
     <span className="inline-block empty:hidden">Speech made simple</span>
     </div>

    <div className='flex flex-col gap-20'>
      {posts.map((post) => 
        <div className='flex flex-col gap-4' key={post.id}>
            <h3 className='underline underline-offset-4 text-blue-500 text-3xl'>{post.title}</h3>
            <div>{post.text.substring(40)}...</div>
            <Link href={`/blog/${post.id}`}>Read More</Link>

        </div>
      )}
      </div>
    </div>
  );
}

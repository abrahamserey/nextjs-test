import { DatabaseOperations } from "@/src/database/operations";
import { CreatePost } from "../components/Blog/CreatePost";

export default async function Post() {

  const operations = new DatabaseOperations();
  const posts = await operations.getBlogPosts();

  return (
    <div>
      <CreatePost />
    </div>
  );
}

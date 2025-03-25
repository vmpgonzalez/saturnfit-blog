import { useParams } from "react-router-dom";
import posts from "../data/posts";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <main>
      <h2>{post.title}</h2>
      <p>
        <small>{post.date}</small>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}

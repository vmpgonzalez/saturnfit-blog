import { Link } from "react-router-dom";
import posts from "../data/posts";

export default function BlogList() {
  return (
    <main>
      <h2>Latest Blog Posts</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.excerpt}</p>
          <small>{post.date}</small>
        </article>
      ))}
    </main>
  );
}

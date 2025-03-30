import { Link } from "react-router-dom";
import posts from "../data/posts";
import { getStoredPosts } from "../utils/localStorage";

export default function BlogList() {
  const storedPosts = getStoredPosts();
  const allPosts = [...storedPosts, ...posts];

  return (
    <main>
      <h2>Latest Blog Posts</h2>
      {allPosts.map((post) => (
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

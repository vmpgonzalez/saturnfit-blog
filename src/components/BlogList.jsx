import { Link } from "react-router-dom";
import { getStoredPosts } from "../utils/localStorage";

export default function BlogList() {
  const storedPosts = getStoredPosts();
  const allPosts = [...storedPosts];
  const sortedPosts = allPosts.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date) - new Date(a.date); // newest first
  });

  return (
    <main>
      <h2>Latest Blog Posts</h2>
      {sortedPosts.map((post) => (
        <article key={post.id} className="blog-card">
          <h3>
            <Link to={`/post/${post.id}`}>
              {post.title}
              {post.pinned && <span className="pinned-badge"> 📌</span>}
            </Link>
          </h3>
          <p>{post.excerpt}</p>
          <small>{post.date}</small>
        </article>
      ))}
    </main>
  );
}

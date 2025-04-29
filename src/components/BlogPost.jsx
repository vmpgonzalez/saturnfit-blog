import { useParams, useNavigate } from "react-router-dom";
import { getStoredPosts, deletePost } from "../utils/localStorage";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const stored = getStoredPosts();
  const post = stored.find((p) => p.id === id); // ✅ corrected here

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this post?")) {
      deletePost(id);
      navigate("/");
    }
  };

  if (!post) return <p>Post not found</p>;

  return (
    <main>
      <h2>{post.title}</h2>
      <p>
        <small>{post.date}</small>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleDelete}>🗑️ Delete Post</button>
        {post.pinned && (
          <span style={{ marginLeft: "10px", color: "#eab308" }}>
            📌 Pinned
          </span>
        )}
      </div>
    </main>
  );
}

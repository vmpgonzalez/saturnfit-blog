import { useParams, useNavigate } from "react-router-dom";
import posts from "../data/posts";
import { getStoredPosts, deletePost } from "../utils/localStorage";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const stored = getStoredPosts();
  const isLocalPost = stored.some((p) => p.id === id);
  const allPosts = [...stored, ...posts];
  const post = allPosts.find((p) => p.id === id);

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

      {isLocalPost && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={handleDelete}>🗑️ Delete Post</button>
        </div>
      )}
    </main>
  );
}

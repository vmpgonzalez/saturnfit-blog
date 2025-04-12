import { useState, useEffect } from "react";
import { saveNewPost, getStoredPosts, updatePost } from "../utils/localStorage";
import { useNavigate, useParams } from "react-router-dom";

export default function CreatePost() {
  const { id } = useParams(); // get ID from URL if editing
  const isEditing = Boolean(id); // true if we're editing
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    content: "",
  });

  // Prefill the form if we're editing
  useEffect(() => {
    if (isEditing) {
      const existing = getStoredPosts().find((p) => p.id === id);
      if (existing) {
        setFormData({
          title: existing.title,
          date: existing.date,
          content: existing.content.replace(/<\/?p>/g, ""), // remove <p> tags
        });
      }
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      id: isEditing ? id : Date.now().toString(),
      title: formData.title,
      date: formData.date,
      excerpt: formData.content.substring(0, 100) + "...",
      content: `<p>${formData.content}</p>`,
    };

    if (isEditing) {
      updatePost(post);
      alert("Post updated!");
      navigate(`/post/${id}`);
    } else {
      saveNewPost(post);
      alert("Post created!");
      navigate("/");
    }
  };

  return (
    <main>
      <h2>{isEditing ? "Edit Blog Post" : "Create New Blog Post"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Date:
          <br />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Content:
          <br />
          <textarea
            name="content"
            rows="10"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <br />
        <br />
        <button type="submit">
          {isEditing ? "Update Post" : "Submit Post"}
        </button>
      </form>
    </main>
  );
}

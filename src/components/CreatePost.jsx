import { useState } from "react";
import { saveNewPost } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now().toString(),
      title: formData.title,
      date: formData.date,
      excerpt: formData.content.substring(0, 100) + "...",
      content: `<p>${formData.content}</p>`,
    };

    saveNewPost(newPost);
    alert("Post saved!"); // optional
    navigate("/"); // go back to blog
  };

  return (
    <main>
      <h2>Create New Blog Post</h2>
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
        <button type="submit">Submit Post</button>
      </form>
    </main>
  );
}

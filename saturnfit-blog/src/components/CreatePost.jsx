import { useState } from "react";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("New post submitted! (Not yet saved to backend)");
    console.log(formData);
    // Later: Send to backend
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

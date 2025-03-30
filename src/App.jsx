import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import CreatePost from "./components/CreatePost";

const basename = "/saturnfit-blog";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

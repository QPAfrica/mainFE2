import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import Blog from "../src/pages/blog";
// import About from "../src/pages/about";
import Fellows from "../src/pages/fellows";
import Partners from "../src/pages/partners";
import SingleBlog from "../src/pages/singleblog";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="fellows" element={<Fellows />} />
        <Route path="partners" element={<Partners />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

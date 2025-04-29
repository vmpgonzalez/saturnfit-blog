import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="SaturnFit Blog Logo"
          style={{
            height: "50px",
            marginBottom: "10px",
          }}
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">New Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

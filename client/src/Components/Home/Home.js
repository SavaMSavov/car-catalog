import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="basic">
      <h1>BMW Catalog with member's cars</h1>
      <h2>
        Don’t have an account yet?
        <Link to={"/register"}> Sign Up </Link> or{" "}
        <Link to={"/login"}> Sign In </Link>
      </h2>
      <div className="player">
        <ReactPlayer url="https://www.youtube.com/watch?v=9rx7-ec0p0A" />
      </div>
    </section>
  );
};

export default Home;

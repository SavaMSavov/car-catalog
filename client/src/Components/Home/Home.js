import ReactPlayer from "react-player";

const Home = () => {
  return (
    <section className="basic">
      <h1>BMW Catalog with member's cars</h1>
      <div className="player">
        <ReactPlayer url="https://www.youtube.com/watch?v=9rx7-ec0p0A" />
      </div>
    </section>
  );
};

export default Home;

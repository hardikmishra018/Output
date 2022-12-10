import BlogData from "./Blog-card-data";
import BlogCard from "./Blog-card";
import Navbar from "../Navbar";

export default function Home() {
  const BlogCards = BlogData.map((item) => {
    return <BlogCard {...item} />;
  });

  return (
    <>
      {/* home section */}
      <div className="home">
        <div className="home-content">
          <h1>Arcade</h1>
          <p>Output features the brand new instrument library "Arcade"</p>
          <button className="home-btn">Check it out</button>
        </div>
      </div>

      {/* features section */}

      <div className="features">
        <div className="features-head">
          <h1>
            We help <br /> you make music
          </h1>
          <p>
            Output makes cutting edge software and gear for musicians so you can
            just focus on being creative
          </p>
        </div>
        <div className="features-body">
          <div className="feature-card">
            <h1>Arcade</h1>
            <p>One instrument to rule them all</p>
            <img src="https://i.postimg.cc/SNfNx10q/Capture.png" />
          </div>
          <div className="feature-card">
            <h1>FX</h1>
            <p>Powerfull effects to transform you sounds</p>
            <img src="https://i.postimg.cc/R0rPpdF6/Capture.png" />
          </div>
          <div className="feature-card">
            <h1>Sonic boom!</h1>
            <p>The new platinum standard speaker in studio.</p>
            <img src="https://i.postimg.cc/j2602xXs/pexels-photo-2651794.webp" />
          </div>
          <div className="feature-card">
            <h1>Studio Gear</h1>
            <p>Made by musicians, for musicians</p>
            <img src="https://i.postimg.cc/YCj9DNVH/I4.jpg" />
          </div>
        </div>
      </div>

      {/* Blog section */}

      <div className="blog">
        <div className="blog-head">
          <h1>Output Blogs</h1>
          <a href="#">Check More >></a>
        </div>
        <div className="blog-body">{BlogCards}</div>
      </div>
    </>
  );
}

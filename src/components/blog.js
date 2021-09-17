import React from "react";
import Vegie from "../assets/blogs/vegetables.png";
import Eye from "../assets/blogs/eye.png";
import Exercise from "../assets/blogs/execise.png";
import Jog from "../assets/blogs/jog.png";
import Meditate from "../assets/blogs/meditate.png";
import Pills from "../assets/blogs/pills.png";
import Play from "../assets/blogs/play.png";
import Steth from "../assets/blogs/steth.png";
import Xray from "../assets/blogs/xray.png";
import Footer from "./footer";

function Blog(props) {
  const Blogs = [
    {
      id: 1,
      description: `Benefits of fruit and vegetable
in daily diet`,
      image: Vegie,
      author: "kayode Emmanuel",
    },
    {
      id: 2,
      description: " Exercise and your health",
      image: Exercise,
      author: "Patience Adamu",
    },
    {
      id: 3,
      description: "Eye care and eye defects",
      image: Eye,
      author: "Tobiloba Adekoya",
    },
    {
      id: 4,
      description: `Benefits of fruit and vegetable
in daily diet`,
      image: Jog,
      author: "Kayode Emmanuel",
    },
    {
      id: 5,
      description: "Exercise and your health",
      image: Meditate,
      author: "Patience Adamu",
    },
    {
      id: 6,
      description: "Eye care and eye defects",
      image: Pills,
      author: "Tobiloba Adekoya",
    },
    {
      id: 7,
      description: "Eye care and eye defects",
      image: Play,
      author: "Kayode Emmanuel",
    },
    {
      id: 8,
      description: "Eye care and eye defects",
      image: Steth,
      author: "Patience Adamu",
    },
    {
      id: 9,
      description: "Eye care and eye defects",
      image: Xray,
      author: "Patience Adamu",
    },
  ];
  return (
    <div className="mt-5 pt-5">
      {/* BLOG */}
      <section className="team mb-5">
        <h1 className="mt-5 mx-auto mb-5 d-flex justify-content-center">
          Read Our Latest Articles
        </h1>
        <div className="container mb-5">
          <div className="row d-flex flex-row justify-content-start">
            {Blogs.map((blog) => (
              <div
                className="card w-25 border-0 team_card "
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={blog.image}
                  alt="blog"
                  className=""
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                />
                <div className="card-body text-center">
                  <h5>{blog.description}</h5>
                  <h6>{blog.author}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END BLOG */}
      <Footer />
    </div>
  );
}

export default Blog;

import React from "react";
import CommonHero from "../components/CommonHero/CommonHero";
import BlogDetailsContainerAround from "../components/BlogDetails/BlogDetailsContainerAround";
import { useParams } from "react-router-dom";

import BlogUser from "../dataJson/bloguser.json";

export default function Blogdetails() {
  const { id } = useParams();
  const findBlog = BlogUser?.find((blog) => String(blog.id) === String(id));

  if (!findBlog) {
    return (
      <>
        <CommonHero title={"Single Blog"} link={"/"} />
        <section className="container">
          <div className="ak-height-150 ak-height-lg-60"></div>
          <h3>Blog not found</h3>
        </section>
      </>
    );
  }

  return (
    <>
      <CommonHero title={"Cafe Article"} link={"/"} />

      <section className="container">
        <div className="ak-height-150 ak-height-lg-60"></div>

        <div className="blog-details">
          <h3 className="anim-title-3">{findBlog.title}</h3>
          <div className="blog-details-subtitle">
            <p>{findBlog.data}</p>
            <p>{findBlog.postUser}</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="blog-content" id="scrollGaleria">
              <BlogDetailsContainerAround props={findBlog} />
            </div>
          </div>
        </div>

        <div className="ak-height-150 ak-height-lg-60"></div>
      </section>
    </>
  );
}
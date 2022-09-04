import React, { useEffect, useState } from "react";
import { getPosts } from "../axios/postAxios";
import "bootstrap/dist/css/bootstrap.css";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts((result) => setPosts(result));
  }, []);

  return (
    <>
      <div className="text-center">{/* <h1>Today's Articles</h1> */}</div>

      <div className="w-100 text-center">
        <div className="w-100">
          {posts.length > 0 ? (
            posts.map((post) => {
              const { id, title, content, posting, image, userId } = post;
              return (
                <div key={id} className="mx-auto pb-5">
                  <div className="">
                    <div className="">
                      <h2 className="">{title}</h2>
                      <p className="">
                        {/* <b>Posting: {posting}</b> */}
                        {/* <b>User Id: {userId}</b> */}
                        <div className="">
                          <img className="kartu-img" src={image} alt="gambar" />
                        </div>
                        <p>{content}</p>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Loadingsss</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

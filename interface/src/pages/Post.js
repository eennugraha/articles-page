import React, { useState, useEffect } from "react";
import { addPost } from "../axios/postAxios";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    posting: 0,
    image: "",
    userId: 0,
  });

  const navigation = useNavigate();

  const submitHandler = () => {
    addPost(form);
    navigation("/");
  };
  return (
    <>
      <div className="row my-3">
        <div className="w-100 text-center">
          <hr />
          <p>Add Post</p>
        </div>
        <div className="w-50 mx-auto">
          <div className="mb-3">
            <label>Title: </label>
            <input
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              type="text"
              className="form-control"
              placeholder="Title"
            ></input>
          </div>
          <div className="mb-3">
            <label>Content: </label>
            <textarea
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              type="text"
              className="form-control"
              placeholder="Content"
            ></textarea>
          </div>
          <div className="mb-3">
            <label>Posting Status: </label>
            <input
              onChange={(e) => setForm({ ...form, posting: e.target.value })}
              type="number"
              className="form-control"
              placeholder="Posting Status"
            ></input>
          </div>
          <div className="mb-3">
            <label>Image: </label>
            <input
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              type="text"
              className="form-control"
              placeholder="Image"
            ></input>
          </div>
          {/* <div className="mb-3">
            <label>User Id: </label>
            <input
              onChange={(e) => setForm({ ...form, userId: e.target.value })}
              type="number"
              className="form-control"
              placeholder="User Id"
            ></input>
          </div> */}
          <div className="mb-3">
            <button
              onClick={() => submitHandler()}
              className="btn btn-block btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

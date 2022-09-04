import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000/api/items";

const getPosts = async (cb) => {
  try {
    let posts = await axios({
      method: "GET",
      url: URL,
    });
    cb(posts.data);
  } catch (err) {
    console.log(err);
  }
};

const addPost = async (post) => {
  try {
    let result = await axios({
      method: "POST",
      url: URL,
      data: post,
    });
    // console.log(result);
    Swal.fire("Add post", "Post has been added", "success");
  } catch (err) {
    console.log(err);
  }
};

export { getPosts, addPost };

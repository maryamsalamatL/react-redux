import { useState } from "react";
import { fetchPostRequest } from "../redux/posts/postActions";
import { useDispatch, useSelector } from "react-redux";
const PostsSaga = () => {
  const [postId, setPostId] = useState("");
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.post);

  return (
    <div>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchPostRequest(postId))}>
        get post
      </button>
      {loading ? (
        <p>Loading ....</p>
      ) : error ? (
        <p>{error}</p>
      ) : data ? (
        <div>
          <p>post title : {data.title}</p>
          <p>post body : {data.body}</p>
        </div>
      ) : (
        <div>fetch some data</div>
      )}
    </div>
  );
};

export default PostsSaga;

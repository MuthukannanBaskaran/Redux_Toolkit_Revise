import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";
import type { RootState, AppDispatch } from "../../app/store";

const Posts = () => {
  const { postList, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>

      {error && <h1>{error}</h1>}

      {loading && <h1>Loading...</h1>}

      {!loading && (
        <ul>
          {postList.map((post: any, index: number) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
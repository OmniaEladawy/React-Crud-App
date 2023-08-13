import React from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../state/postSlice";

const Index = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  console.log("posts", posts);

  return <PostList />;
};

export default Index;

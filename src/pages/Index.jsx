import React from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../state/postSlice";

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return <PostList data={records} loading={loading} error={error} />;
};

export default Index;

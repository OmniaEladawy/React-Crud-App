import React from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../state/postSlice";
import Loading from "../components/Loading";

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading, error } = useSelector((state) => state.posts);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Loading loading={loading} error={error}>
      <PostList data={records} />
    </Loading>
  );
};

export default Index;

import React from "react";

const Loading = ({ children, loading, error }) => {
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center">
          Loading please wait ...
        </div>
      ) : error ? (
        <div className="d-flex justify-content-center">{error}!</div>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;

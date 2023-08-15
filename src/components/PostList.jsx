import React from "react";
import { memo } from "react";
import { Table } from "react-bootstrap";
import PostItem from "./PostItem";

const PostList = ({ data, deleteRecord }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <PostItem data={data} deleteRecord={deleteRecord} />
      </tbody>
    </Table>
  );
};

export default memo(PostList);

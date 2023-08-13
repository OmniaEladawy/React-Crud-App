import React from "react";
import { Table, Button, ButtonGroup } from "react-bootstrap";

const PostList = ({ data, loading, error }) => {
  React.useEffect(() => {
    console.log("error", error);
  }, [error]);

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
        {loading ? (
          <tr>
            <td colSpan={3}>Loading please wait ...</td>
          </tr>
        ) : error ? (
          <tr>
            <td colSpan={3}>{error}!</td>
          </tr>
        ) : (
          data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>#{index + 1}</td>
                <td>{item.title}</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="success">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
};

export default PostList;

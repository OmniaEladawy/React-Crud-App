import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const PostItem = ({ data, deleteRecord }) => {
  const record = data.map((item, index) => {
    return (
      <tr key={item.id}>
        <td>#{index + 1}</td>
        <td>{item.title}</td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button variant="success">Edit</Button>
            <Button
              variant="danger"
              onClick={() => {
                deleteRecord(item.id);
              }}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
  return <>{record}</>;
};

export default PostItem;

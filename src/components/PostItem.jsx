import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import ConfirmModal from "./ConfirmModal";

const PostItem = ({ data, deleteRecord }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [itemId, setItemId] = React.useState(0);
  const handleDelete = (id) => {
    setModalShow(true);
    // deleteRecord(itemId);
    setItemId(id);
  };

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
                handleDelete(item.id);
              }}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
  return (
    <>
      {record}
      <ConfirmModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        itemId={itemId}
        deleteRecord={deleteRecord}
      />
    </>
  );
};

export default PostItem;

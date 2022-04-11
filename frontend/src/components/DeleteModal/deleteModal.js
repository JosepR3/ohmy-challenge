import React from "react";

import DeleteButton from "../DeleteButton/deleteButton";

export default function DeleteModal(props) {
  
  return (
    <div className="">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Delete</h4>
        </div>
        <div className="modal-body">Are you sure? you want to delete todo number {props.id}</div>
        <div className="modal-footer">
          <button className="button" onClick={props.onClose}>
            Close
          </button>
          <DeleteButton props={props} />
        </div>
      </div>
    </div>
  );
}

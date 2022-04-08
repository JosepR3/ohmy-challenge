import React from "react";

import { BsTrash } from "react-icons/bs"
import { FiEdit } from "react-icons/fi"

export default function Home() {
  return (
    <main className="container">
      <h2 className="text-center">TODO LIST</h2>
      <div>
        <input placeholder="Insert your Id"></input>
      </div>
      <div className="d-flex flex-row flex-wrap mb-1">
        <div className="col-1">User Id</div>
        <div className="col-6">Title</div>
        <div className="col-1">Completed</div>
        <div className="col-1">Edit</div>
        <div className="col-1">Delete</div>
      </div>
      <div className="d-flex flex-row flex-wrap mb-1">
        <div className="col-1">2</div>
        <div className="col-6">hacer la compra</div>
        <div class="col-1 text-center">
          <input type="checkbox" value="" id="flexCheckDefault"/>
        </div>
        <div className="col-1"><button className="btn btn-secondary"><FiEdit /></button></div>
        <div className="col-1"><button className="btn btn-danger"><BsTrash /></button></div>
      </div>
    </main>
  );
}

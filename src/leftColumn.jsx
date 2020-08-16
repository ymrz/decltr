import React from "react";
import { Draggable } from "react-beautiful-dnd";

const LeftColumn = () => {
  return (
    <div className="input-group input-group-sm mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="add an item"
        aria-label="add an item"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-dark rounded" id="basic-addon2">
          +
        </button>
      </div>

      <ul className="flex-column p-3">
        <li className="badge badge-pill badge-dark m-1">Jujubes</li>
        <li className="badge badge-pill badge-dark m-1">Gummi bears</li>
        <li className="badge badge-pill badge-dark m-1">Croissant apple</li>
        <li className="badge badge-pill badge-dark m-1">Macaroon</li>
        <li className="badge badge-pill badge-dark m-1">Tart</li>
        <li className="badge badge-pill badge-dark m-1">Jelly-o</li>
        <li className="badge badge-pill badge-dark m-1">Cheesecake</li>
        <li className="badge badge-pill badge-dark m-1">Toffee</li>
        <li className="badge badge-pill badge-dark m-1">Cake soufflé</li>
        <li className="badge badge-pill badge-dark m-1">Tootsie</li>
      </ul>
    </div>
  );
};

export default LeftColumn;

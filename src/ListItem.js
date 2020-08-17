import React from "react";

function ListItem(props) {
  console.log(props);
  return (
    <div className="input-group input-group-sm mb-3">
      <input
        name="name"
        type="text"
        className="form-control"
        placeholder="add an item"
        aria-label="add an item"
        aria-describedby="basic-addon2"
        onChange={props.addItem}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-dark rounded" id="basic-addon2">
          +
        </button>
      </div>

      <ul className="flex-column p-3">
        <li className="badge badge-pill badge-dark m-1">{props.name}</li>
      </ul>
    </div>
  );
}

export default ListItem;

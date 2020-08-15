import React from "react";

const AddItem = () => {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add Item"
          aria-label="Add Item"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-dark"
            type="button"
            id="button-addon2"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;

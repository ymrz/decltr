import React, { useState, useEffect } from "react";

const ItemList = (props) => {
  return (
    <div className="board-column-content">
      <div className="board-item">
        <span className="badge badge-dark">Old book</span>
      </div>
      <div className="board-item">
        <span className="badge badge-dark">Wedding Dress</span>
      </div>
      <div className="board-item">
        <span className="badge badge-dark">Kitti's Toys</span>
      </div>
    </div>
  );
};

export default ItemList;

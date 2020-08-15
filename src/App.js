import React from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import CalendarView from "./components/CalendarView";
import AddItem from "./components/AddItem";
import Muuri from "muuri";

//muuri

//muuri

const App = () => {
  return (
    <div>
      <div className="container-fluid drag-container">
        <div className="row align-items-center">
          <div className="col-2">
            <AddItem />
            <ItemList />
          </div>
          <div className="col-10">
            <CalendarView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

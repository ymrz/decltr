import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./task";

export default class Column extends React.Component {
  render() {
    return (
      <div className="col-2 card" style={{ height: "100px" }}>
        <p className="font-weight-light">{this.props.column.title}</p>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <div>
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

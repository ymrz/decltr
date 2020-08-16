import React from "react";
import ReactDOM from "react-dom";
import initialData from "./initial-data";
import Column from "./column";
import LeftColumn from "./leftColumn";

//dnd
import { DragDropContext } from "react-beautiful-dnd";

class App extends React.Component {
  state = initialData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    //see if location changed

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    //moving from one list to another

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="container">
        <p
          className="display-3 font-weight-bold"
          style={{ fontFamily: "Righteous" }}
        >
          decltr.
        </p>

        <div className="row">
          <div className="col-2">
            <LeftColumn />
          </div>

          <div className="col-10">
            <div className="row">
              <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.columnOrder.map((columnId) => {
                  const column = this.state.columns[columnId];

                  const tasks = column.taskIds.map(
                    (taskId) => this.state.tasks[taskId]
                  );

                  return (
                    <Column key={column.id} column={column} tasks={tasks} />
                  );
                })}
              </DragDropContext>
            </div>
            <div className="row justify-content-end mt-1"></div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

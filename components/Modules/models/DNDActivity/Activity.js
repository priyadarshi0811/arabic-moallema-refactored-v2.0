import { CardContent, Card, IconButton, Grid, Paper } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";
import dnd_data from "./dnd_data";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from "./column";
import Person from "./tasks";
import Container from "@mui/material/Container";

const activity = {
  Alif: [
    {
      activity_type: "dnd",
      identifier: "position",
      activity_ques_title:
        "Drag and drop words which have Alif at initial, middle or final position",
      dnd_data: {
        tasks: {
          "task-1": { id: "task-1", content: "فِدا" },
          "task-2": { id: "task-2", content: "الله" },
          "task-3": { id: "task-3", content: "مال" },
          "task-4": { id: "task-4", content: "سيما" },
          "task-5": { id: "task-4", content: "سيما" },
        },
        columns: {
          "column-1": {
            id: "column-1",
            name: "Drag the words and drop",
            taskIds: ["task-1", "task-2", "task-3", "task-4"],
          },
          "column-2": {
            id: "column-2",
            name: "Initian",
            taskIds: [],
          },
          "column-3": {
            id: "column-3",
            name: "Middle",
            taskIds: [],
          },
          "column-4": {
            id: "column-4",
            name: "Final",
            taskIds: [],
          },
        },
        columnOrder: ["column-1", "column-4", "column-3", "column-2"],
      },
    },
  ],
};

const returnAssignmentComponent = (assignment_type, processing_data) => {
  switch (assignment_type) {
    case "dnd":
      return <DragDropActivity dnd_data={processing_data["dnd_data"]} />;
    default:
      return;
  }
};

const LetterActivity = () => {
  return (
    <div>
      {activity["Alif"].map((act) => {
        console.log(act);
        return (
          <center>
            <br />
            <Card style={{ width: "100%", margin: "10px" }}>
              <CardContent>
                <div className="bg-dark-purple text-center text-white p-5 w-full rounded-md">
                  <h1>
                    Drag the words and drop it in Initial, Middle or Final: Alif
                  </h1>
                </div>
                {returnAssignmentComponent(act["activity_type"], act)}
              </CardContent>
            </Card>
          </center>
        );
      })}
    </div>
  );
};

class DragDropActivity extends React.Component {
  state = this.props.dnd_data;

  // handling drag ends

  handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const end = this.state.columns[destination.droppableId];

    if (start === end) {
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

    console.log("TO other column");
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(end.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...end,
      taskIds: endTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    console.log("Different column");
    console.log(newState);

    this.setState(newState);
  };

  render() {
    console.log(this.props);
    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <Container style={{ display: "flex" }}>
          <Grid container rowSpacing={6} sx={{ marginTop: "5%" }}>
            {this.state.columnOrder.map((columnid) => {
              const column = this.state.columns[columnid];
              console.log(column.taskIds);
              const tasks = column.taskIds.map((taskid) => {
                return this.state.tasks[taskid];
              });
              console.log("Column:" + columnid);
              console.log(tasks);

              return (
                <div className="grid grid-cols-auto">
                  <Droppable droppableId={columnid}>
                    {(provided) => (
                      <List
                        provided={provided}
                        innerRef={provided.innerRef}
                        name={column.name}
                      >
                        {tasks.map((task, key) => {
                          return (
                            <Draggable
                              draggableId={task.id}
                              index={key}
                              key={task.id}
                            >
                              {(provided, snapshot) => (
                                <Person
                                  provided={provided}
                                  snapshot={snapshot}
                                  innerRef={provided.innerRef}
                                  task_content={task.content}
                                />
                              )}
                            </Draggable>
                          );
                        })}

                        {provided.placeholder}
                      </List>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </Grid>
        </Container>
      </DragDropContext>
    );
  }
}

export default LetterActivity;

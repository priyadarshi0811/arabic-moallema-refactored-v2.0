import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Card, CardContent } from "@mui/material";

class List extends React.Component {
  render() {
    const { provided, innerRef, children } = this.props;
    return (
      <div {...provided.droppableProps} ref={innerRef}>
        <div className="px-2 py-5 w-72 ">
          <div className="bg-dark-purple text-center text-white p-2 w-full rounded-t-md ">
            <h1 className="">{this.props.name}</h1>
          </div>
          <div className="bg-white p-5 w-full rounded-b-md h-full grid grid-cols-1 border-2 shadow-lg">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default List;

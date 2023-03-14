import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Paper } from '@mui/material'
import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";



class Person extends React.Component {

    isDragging = (event, result) => {
        if(result.isDragging){
            event.target.style.backgroundColor = 'lightblue';
        }
        
    }

    render() {
      const { provided, snapshot, innerRef } = this.props;
      return (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={innerRef}
        >
          <Paper variant='outlined' style={{ padding: '1px', width: '100%', marginTop: '10px' , backgroundColor: snapshot.isDragging ? 'lightgreen' : 'white' }}>
            {/* {this.props.task_content} */}
            <div className=" ">
              {/* <MUIMiniCard title={this.props.task_content} /> */}
              <h1 className="py-5 text-dark-purple">{this.props.task_content}</h1>
            </div>
          </Paper>
        </div>
      );
    }
  }
export default Person
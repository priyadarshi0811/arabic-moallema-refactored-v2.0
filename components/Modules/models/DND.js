import MUIMiniCard from "@/components/Layout/card/MUIMiniCard";
import React from "react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


const DND = () => {
  return (
    <div className="m-10 ">
      <div className="bg-dark-purple text-center text-white p-5 w-full rounded-md">
        <h1>Drag the words and drop it in Initial, Middle or Final: Alif</h1>
      </div>
      <div className="bg-white p-10 w-full rounded-md h-full grid grid-cols-3">
        <div className="col-span-3">
          <div className="grid grid-cols-6 gap-10">
            <div className="cursor-pointer">
              <MUIMiniCard title="مال" />
            </div>
            <div className="cursor-pointer">
              <MUIMiniCard title="الله" />
            </div>
            <div className="cursor-pointer">
              <MUIMiniCard title="فِدا" />
            </div>
            <div className="cursor-pointer">
              <MUIMiniCard title="مال" />
            </div>
            <div className="cursor-pointer">
              <MUIMiniCard title="الله" />
            </div>
            <div className="cursor-pointer">
              <MUIMiniCard title="فِدا" />
            </div>
            
          </div>
        </div>

        <div className="px-5 py-10">
          <div className="bg-dark-purple text-center text-white p-2 w-full rounded-t-md">
            <h1>Initial</h1>
          </div>
          <div className="bg-white p-10 w-full rounded-b-md h-full grid grid-cols-3 border-2 shadow-lg">

          </div>
        </div>
        <div className="px-5 py-10">
          <div className="bg-dark-purple text-center text-white p-2 w-full rounded-t-md">
            <h1>Middle</h1>
          </div>
          <div className="bg-white p-10 w-full rounded-b-md h-full grid grid-cols-3 border-2 shadow-lg">

          </div>
        </div>
        <div className="px-5 py-10">
          <div className="bg-dark-purple text-center text-white p-2 w-full rounded-t-md">
            <h1>Final</h1>
          </div>
          <div className="bg-white p-10 w-full rounded-b-md h-full grid grid-cols-3 border-2 shadow-lg">

          </div>
        </div>
      </div>
    </div>
  );
};

export default DND;

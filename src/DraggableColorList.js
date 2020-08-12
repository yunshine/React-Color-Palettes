import React from "react"; 
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";

export default function DraggableColorList(colors, removeColor) {
  return (
    <div>
     {colors.map(color => (
        <DraggableColorBox 
        key={color.name} 
        color={color.color} 
        name={color.name} 
        handleClick={() => removeColor(color.name)} 
        />
      ))}
    </div>
  )
}

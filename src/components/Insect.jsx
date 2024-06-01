// Insect.js
import { Box } from "@mui/material";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { useMyContext } from "../context/myState";

const Insect = ({ type, id, imgSrc }) => {
  const [position, setPosition] = useState({ x: 100, y: 200 });

  const { handleDrag: onDrag, handleInsectEat: onEat } = useMyContext();

  const [{ isDragging }, dragRef] = useDrag({
    type: "insectContainer",
    item: { type: "insectContainer", position },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      delta: monitor.getDifferenceFromInitialOffset(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.name === "mouth") {
        onEat(id);
      } else {
        const delta = monitor.getDifferenceFromInitialOffset();
        if (delta) {
          const newX = position.x + delta.x;
          const newY = position.y + delta.y;
          setPosition({ x: newX, y: newY });
        }
      }
    },
  });

  const handleDrag = (event) => {
    event.preventDefault();
    const rect = event.target.getBoundingClientRect();
    onDrag(rect.x + rect.width / 2, rect.y + rect.height / 2);
  };

  return (
    <Box
      component={"div"}
      ref={dragRef}
      onMouseMove={handleDrag}
      onTouchMove={handleDrag}

      sx={{
        opacity: isDragging ? 0.5 : 1,
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
    >
      <img src={imgSrc} alt={`${type} Insect`} className="insect-image" />
    </Box>
  );
};

export default Insect;

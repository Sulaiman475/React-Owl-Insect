import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useDrop } from 'react-dnd';

const Mouth = ({ onDrop, children }) => {
  const [droped, setDroped] = useState(false);
  const [, dropRef] = useDrop({
    accept: 'insectContainer',
    drop: () => {
      setDroped(true)
      return { name: 'mouth' }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });


  return (
    <Box
      component={'div'}
      ref={dropRef}
      sx={{
        width: 70,
        height: 40,
        borderRadius: "100rem",
        backgroundColor: 'transparent',
        // backgroundColor: 'red',
        position: 'absolute',
        bottom: 30,
        left: "43%",
      }}
      className={droped ? 'bounce-out' : ''}
    >
      {children}
    </Box>
  );
};

export default Mouth;

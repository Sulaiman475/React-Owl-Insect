import React from 'react'
import { Box, Container } from '@mui/material'
import InsectButton from './InsectButton';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { insectsData } from '../data/data';
import Owl from './Owl';
import Insect from './Insect';
import { useMyContext } from '../context/myState';

const Board = () => {
    const {insects} = useMyContext();

  return (
    <DndProvider backend={HTML5Backend}>
        <Box sx={{paddingTop: '100px', width: "100vw", height: '100vh', backgroundImage: 'url(https://th.bing.com/th/id/OIP.M8lixDc8kXi7ZwqQ1o87JgHaEo?w=2560&h=1600&rs=1&pid=ImgDetMain)'}}>
            <Container >
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem'}}>
                    {
                        insectsData.map(insect => (
                            <InsectButton key={insect.name} imgSrc={insect.imgSrc} name={insect.name} />
                        ))
                    }
                </Box>
                <Owl />
                {insects.map((insect) => (
                    <Insect
                        key={insect.id}
                        id={insect.id}
                        type={insect.type}
                        imgSrc={insect.imgSrc}
                    />
                ))}
            </Container>
        </Box>
    </DndProvider>
  )
}

export default Board

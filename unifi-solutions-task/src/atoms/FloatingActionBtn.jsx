import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButtonSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} className="sticky float-right right-10 bottom-5">
      <Fab color="primary" aria-label="add" >
        <AddIcon />
      </Fab>
    </Box>
  );
}
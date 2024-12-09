import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Divider } from '@mui/material';

const TaskDetails = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return (
      <Typography variant="h6" color="error" sx={{ textAlign: 'center', mt: 5 }}>
        Tarea no encontrada
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: 500, margin: 'auto', mt: 5, p: 2 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          {task.name}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Descripción:</strong> {task.description}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Tipo:</strong> {task.type}
        </Typography>
        <Typography variant="body1">
          <strong>Estado:</strong> {task.completed ? 'Completada' : 'Pendiente'}
        </Typography>
      </Paper>
    </Box>
  );
};

export default TaskDetails;

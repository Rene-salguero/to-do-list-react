import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper,
  Grid,
} from '@mui/material';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({ name: '', description: '', type: 'trabajo' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now(), completed: false });
    setTask({ name: '', description: '', type: 'trabajo' });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5, p: 2 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 3, textAlign: 'center' }}>
          Agregar Tarea
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre de la tarea"
                variant="outlined"
                value={task.name}
                onChange={(e) => setTask({ ...task, name: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descripción"
                variant="outlined"
                multiline
                rows={3}
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Tipo"
                value={task.type}
                onChange={(e) => setTask({ ...task, type: e.target.value })}
              >
                <MenuItem value="trabajo">Trabajo</MenuItem>
                <MenuItem value="casa">Casa</MenuItem>
                <MenuItem value="negocios">Negocios</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Agregar Tarea
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AddTask;

import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Chip,
  Divider,
} from '@mui/material';
import { CheckCircle, Delete } from '@mui/icons-material';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
        Lista de Tareas
      </Typography>
      <List>
        {tasks.map((task) => (
          <React.Fragment key={task.id}>
            <ListItem
              sx={{
                bgcolor: task.completed ? '#f0f0f0' : '#fff',
                mb: 1,
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 16px',
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                  }}
                >
                  {task.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {task.description}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip
                  label={task.type}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
                <IconButton
                  onClick={() => toggleTask(task.id)}
                  color={task.completed ? 'default' : 'success'}
                >
                  <CheckCircle />
                </IconButton>
                <IconButton onClick={() => deleteTask(task.id)} color="error">
                  <Delete />
                </IconButton>
              </Box>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';
import NavBar from './components/NavBar';
import theme from './theme';
import { ThemeProvider } from '@emotion/react';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    toast.success(`Tarea "${task.name}" agregada exitosamente!`);
  };
  
  
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
};
const deleteTask = (id) => {
  const taskToDelete = tasks.find((task) => task.id === id);
  setTasks(tasks.filter((task) => task.id !== id));
  toast.error(`Tarea "${taskToDelete.name}" eliminada!`);
};

  return (

    <ThemeProvider theme={theme}>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/add" element={<AddTask addTask={addTask} />} />
        <Route
          path="/tasks"
          element={<TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />}
        />
        <Route path="/tasks/:id" element={<TaskDetails tasks={tasks} />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;

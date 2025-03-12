import { useState } from "react";
import { Container, Typography, Button, TextField, MenuItem, Card, CardContent, Grid } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const initialTasks = [
  { id: 1, title: "Aprender React", status: "To Do" },
  { id: 2, title: "Hacer ejercicio", status: "In Progress" },
];
const statusOptions = ["To Do", "In Progress", "Completed"];
const COLORS = ["#FF8042", "#0088FE", "#00C49F"];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTask, status: "To Do" }]);
    setNewTask("");
  };

  const updateTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, status: newStatus } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const chartData = statusOptions.map(status => ({
    name: status,
    value: tasks.filter(task => task.status === status).length,
  }));

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Tareas</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Nueva Tarea"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button variant="contained" onClick={addTask} sx={{ mt: 2 }}>Agregar</Button>
          {tasks.map(task => (
            <Card key={task.id} sx={{ mt: 2 }}>
              <CardContent>
                <Typography>{task.title}</Typography>
                <TextField
                  select
                  value={task.status}
                  onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                  sx={{ mr: 2 }}
                >
                  {statusOptions.map(status => <MenuItem key={status} value={status}>{status}</MenuItem>)}
                </TextField>
                <Button color="error" onClick={() => deleteTask(task.id)}>Eliminar</Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Estado de tareas</Typography>
          <PieChart width={250} height={250}>
            <Pie data={chartData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Grid>
      </Grid>
    </Container>
  );
}

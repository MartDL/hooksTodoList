import React from 'react';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';


// import Typography from '@material-ui/core/Typography';

function TodoApp() {
    const initialTodos = [{ id: 1, task: "pet a monkey", completed: false }];
    const {todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);
    
    return (
        <Paper 
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: 'lightgrey',
            }}
            elevation={0}
            >
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{margin: "1rem"}}>
                <Grid xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList 
                        todos={todos} 
                        removeTodo={removeTodo} 
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                        />
                </Grid>
            </Grid>
        </Paper>
    );
}


export default TodoApp;

// - TodoApp
//     - TodoForm
//     - TodoList
//         - TodoItem
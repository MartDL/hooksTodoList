import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/v4'; 

// import Typography from '@material-ui/core/Typography';

function TodoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
    // const initialTodos = [
    //     { id: 1, task: "clean fish", completed: false },
    //     { id: 2, task: "walk dog", completed: true },
    //     { id: 3, task: "wash the car", completed: false },
    // ];
    const [todos, setTodos] = useState(initialTodos);

    // useEffect to save to local storage
    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    };
    const removeTodo = todoId => {
        //filter out removed todo
        const updatedTodos = todos.filter(todos => todos.id !== todoId);
        //call setTodos with new array
        setTodos(updatedTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
            );
            setTodos(updatedTodos);
    }
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, task: newTask}  : todo
            );
            setTodos(updatedTodos);
        };
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
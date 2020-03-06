
import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid/v4'; 

export default initialTodos => {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
        },
        removeTodo: todoId => {
            //filter out removed todo
            const updatedTodos = todos.filter(todos => todos.id !== todoId);
            //call setTodos with new array
            setTodos(updatedTodos);
        },
        toggleTodo: todoId => {
            const updatedTodos = todos.map(todo => 
                todo.id === todoId ? {...todo, completed: !todo.completed} : todo
                );
                setTodos(updatedTodos);
        },
        editodo: (todoId, newTask) => {
            const updatedTodos = todos.map(todo => 
                todo.id === todoId ? {...todo, task: newTask}  : todo
                );
                setTodos(updatedTodos);
            }
        }
    }       



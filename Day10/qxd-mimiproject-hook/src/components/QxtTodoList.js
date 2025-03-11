import React, { useEffect, useReducer } from 'react';
import QxtTodoReducer from '../reducers/QxtTodoReducer'; // Corrected import
import QxtAddTodo from './QxtAddTodo';
import QxtTodoItem from './QxtTodoItem';

export default function QxtTodoList() {
    const [todos, dispatch] = useReducer(QxtTodoReducer, [], () => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div>
            <h2>Danh sách công việc</h2>
            <QxtAddTodo dispatch={dispatch} />
            <ul>
                {todos.map((todo) => (
                    <QxtTodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    );
}

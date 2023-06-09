import React from 'react';
import './AppHeader.css';

export default function AppHeader({ toDo, done }) {
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{toDo} more to go, {done} done</h2>
        </div>
    )
}

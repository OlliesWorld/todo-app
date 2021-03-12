import React from 'react'
import ToDo from './components/todo'
import Greeting from './components/greeting'

export default function App() {

    return (
        <div className="todo_list">
            <Greeting />
            <ToDo />
            <ToDo />
            <ToDo />
        </div>
    )
}
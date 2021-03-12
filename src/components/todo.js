import React from 'react'

export default function ToDo() {
    return (
        <div className="todo_item">
            <label>
                <input type="checkbox" name="key" value="value" />

                <p>Task Name</p>
            </label>

        </div>
    )
}
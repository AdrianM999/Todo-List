import { useState } from "react"

export default function NewTodoForm({ addTodo }) {
const [newItem, setNewItem] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newItem);
    setNewItem('')
}

    return (
        <form onSubmit={handleSubmit} className='form'>
            <label htmlFor="item" className="label">
                Add new Item
                <input
                id="item"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                />
            </label>
            <button className="btn">
                Add
            </button>
        </form>
    )
}

export default function TodoItem({ id, completed, title, toggleTodo, deleteTodo }) {
    return (
        <li className="items-li">
           <label className="container-label"> 
                <input
                    type='checkbox'
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                    className='input-checked'
                />
                {title}
           </label>
           <button 
                onClick={() => deleteTodo(id) }  
                className="btn-danger"
            >
                Delete
           </button>
        </li>
    )
}

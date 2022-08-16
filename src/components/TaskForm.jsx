import { useState } from "react";

function TaskForm({createTask}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description);
        createTask({
            title,
            description
        })
    }

    return (

        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Escribe tu tárea" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
                />
            <textarea 
                placeholder="Escribe la descripción de tu tárea"    
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <button>
                Guardar
            </button>
        </form>

    );
}

export default TaskForm
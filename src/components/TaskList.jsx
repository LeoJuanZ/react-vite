import TaskCard from './TaskCard';
import {useContext} from 'react';
import {TaskContext} from '../context/taskContext'

function TaskList() {
// function TaskList(props) {

    const {tasks, deleteTask} = useContext(TaskContext)

    if (tasks.length === 0) {
    // if (props.tasks.length === 0) {
        return <h1>No hay tareas aún</h1>
    }

    return (
        <div>
            
            {/* {props.tasks.map((task) => ( */}
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}

        </div>
    )
}

export default TaskList
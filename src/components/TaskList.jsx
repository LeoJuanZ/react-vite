import TaskCard from './TaskCard';

function TaskList({tasks, deleteTask}) {
// function TaskList(props) {

    if (tasks.length === 0) {
    // if (props.tasks.length === 0) {
        return <h1>No hay tareas aún</h1>
    }

  return (
    <div>
        
        {/* {props.tasks.map((task) => ( */}
        {tasks.map((task) => (
            <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
        ))}

    </div>
  )
}

export default TaskList
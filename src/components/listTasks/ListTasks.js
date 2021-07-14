import './list-tasks.css';
import TaskItem from '../task-item/TaskItem';

function ListTasks({ tasks, setTasks }) {
    return (
        <div id='list-tasks'>
            <h2>
                my<span>tasks</span>
                <div>{tasks.length}</div>
            </h2>
            <i className='fas fa-arrow-down'></i>
            {tasks.length === 0 && 'No tasks.'}
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        taskId={task.id}
                        task={task.task}
                        description={task.description}
                        setTasks={setTasks}
                        tasks={tasks}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ListTasks;

import './task-item.css';
import { useState } from 'react';

function TaskItem({ task, taskId, description, setTasks, tasks }) {
    const [showDescription, setShowDescription] = useState(false);

    function removeTask(taskId) {
        const taskFiltered = tasks.filter((task) => task.id !== taskId);
        setTasks(taskFiltered);
    }
    return (
        <>
            <li
                onClick={(e) => {
                    if (e.target.localName !== 'i')
                        setShowDescription(!showDescription);
                }}
                id='task-item'
            >
                {task}
                <i
                    onClick={() => removeTask(taskId)}
                    className='fas fa-trash-alt'
                ></i>
            </li>
            {showDescription && <p id='description'>{description}</p>}
        </>
    );
}

export default TaskItem;

import { useState } from 'react';
import './new-task.css';

function NewTask({ tasks, setTasks }) {
    const [newTask, setNewTask] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [showErrorInput, setShowErrorInput] = useState(false);
    const [showErrorDescription, setshowErrorDescription] = useState(false);

    return (
        <div id='new-task-container'>
            <div id='new-task'>
                <h1>Add a new task</h1>
                <div>
                    <i className='fas fa-arrow-down'></i>
                </div>
                <input
                    value={newTask}
                    onChange={(e) => {
                        setNewTask(e.target.value);
                    }}
                    maxLength='20'
                    type='text'
                    placeholder='Enter a new task'
                />
                {showErrorInput && <p>You must enter at least 5 character</p>}
                <textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    rows='3'
                    maxLength='87'
                    type='text'
                    placeholder='Description'
                />
                {showErrorDescription && (
                    <p>You must enter at least 10 character</p>
                )}
                <button
                    onClick={() => {
                        if (newTask.length < 5) {
                            setShowErrorInput(true);
                        } else if (newDescription.length < 10) {
                            setShowErrorInput(false);
                            setshowErrorDescription(true);
                        } else {
                            setTasks(
                                tasks.concat({
                                    id: tasks.length + 1,
                                    task: newTask,
                                    description: newDescription,
                                })
                            );
                            setNewTask('');
                            setNewDescription('');
                            setShowErrorInput(false);
                            setshowErrorDescription(false);
                        }
                    }}
                >
                    <i className='fas fa-plus-circle'></i>Add task
                </button>
            </div>
        </div>
    );
}

export default NewTask;

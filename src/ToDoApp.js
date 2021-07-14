import './to-do-app.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { useState } from 'react';

const INITIAL_TASKS_ARRAY = [
    {
        id: 1,
        task: 'Task Example 1',
        description:
            'Description of the first task. You can write 87 characters.',
    },
    {
        id: 2,
        task: 'Task Example 2',
        description:
            'Description of the second task. You can write 87 characters.',
    },
];

function ToDoApp() {
    const [tasks, setTasks] = useState(INITIAL_TASKS_ARRAY);

    return (
        <div className='to-do-app'>
            <Header />
            <Main tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default ToDoApp;

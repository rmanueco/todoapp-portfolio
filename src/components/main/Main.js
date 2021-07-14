import './main.css';

import NewTask from '../newTask/NewTask';
import ListTasks from '../listTasks/ListTasks';

function Main({ tasks, setTasks }) {
    return (
        <div id='main'>
            <NewTask tasks={tasks} setTasks={setTasks} />
            <ListTasks tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default Main;

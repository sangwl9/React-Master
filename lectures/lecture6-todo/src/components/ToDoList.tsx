import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList() {
    const [toDo, doing, done] = useRecoilValue(toDoSelector);
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateToDo />
            <hr />
            <h2>To Do</h2>
            <ul>
                {toDo.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
            <h2>Doing</h2>
            <ul>
                {doing.map((doing) => (
                    <ToDo key={doing.id} {...doing} />
                ))}
            </ul>
            <hr />
            <h2>Done</h2>
            <ul>
                {done.map((done) => (
                    <ToDo key={done.id} {...done} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;

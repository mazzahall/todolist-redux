import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "./useTodoList";
import {useNavigate} from "react-router";

export default function AddTodo() {

    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleAddTodo() {
        dispatch(addTodo({name: name}))
        navigate("/todolist");
    }

    return (
        <div>
            <h1>Add Todo</h1>
            <input type="text" placeholder="Enter todo name"
                   onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleAddTodo}>Add</button>
        </div>
    )
}
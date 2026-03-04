import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { removeTodo } from "./useTodoList.js";

export default function ListTodo() {
    const todos = useSelector((state) => state.todoList);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Daftar Todo</h1>
            
            {/* Bagian navigasi ditambahkan Link ke Home */}
            <div style={{ marginBottom: '20px' }}>
                <Link to="/">Kembali ke Home</Link> | <Link to="/todolist/add">Tambah Todo</Link>
            </div>

            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nama Todo</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                {todos.length === 0 ? (
                    <tr>
                        <td colSpan="3" style={{ textAlign: 'center' }}>Belum ada Todo.</td>
                    </tr>
                ) : (
                    todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td>
                            <td>
                                <Link to={`/todolist/${todo.id}/edit`} style={{ marginRight: '10px' }}>
                                    Update
                                </Link>
                                
                                {/* Tombol Delete diberikan class btn-danger agar berwarna merah */}
                                <button className="btn-danger" onClick={() => dispatch(removeTodo({ id: todo.id }))}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
}
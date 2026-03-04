import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

// --- IMPORT KOMPONEN ---
import App from "./App.jsx";
import ListTodo from "./ListTodo.jsx";
import AddTodo from "./AddTodo.jsx";
import UpdateTodo from "./UpdateTodo.jsx";

// Import Komponen Student baru
import ListStudent from "./ListStudent.jsx";
import AddStudent from "./AddStudent.jsx";

// --- IMPORT SLICE REDUX ---
import { todoListSlice } from "./useTodoList.js";
import { studentSlice } from "./studentSlice.js"; // Import slice student

// --- SETUP STORE ---
const store = configureStore({
    reducer: {
        todoList: todoListSlice.reducer,
        student: studentSlice.reducer // Gabungkan reducer student di sini!
    }
});

// --- RENDER ---
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {/* Routes untuk Home */}
                    <Route path={"/"} element={<App/>}/>

                    {/* Routes untuk Todo List */}
                    <Route path={"/todolist"} element={<ListTodo/>}/>
                    <Route path={"/todolist/add"} element={<AddTodo/>}/>
                    <Route path={"/todolist/:id/edit"} element={<UpdateTodo/>}/>

                    {/* Routes untuk Student */}
                    <Route path={"/student"} element={<ListStudent/>}/>
                    <Route path={"/student/add"} element={<AddStudent/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
);
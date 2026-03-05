import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ListTodo from "./ListTodo.jsx";
import AddTodo from "./AddTodo.jsx";
import UpdateTodo from "./UpdateTodo.jsx";
import ListStudent from "./ListStudent.jsx";
import AddStudent from "./AddStudent.jsx";
import UpdateStudent from "./UpdateStudent.jsx";
import { todoListSlice } from "./useTodoList.js";
import { studentSlice } from "./studentSlice.js"; 
const store = configureStore({
    reducer: {
        todoList: todoListSlice.reducer,
        student: studentSlice.reducer 
    }
});
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<App/>}/>
                    <Route path={"/todolist"} element={<ListTodo/>}/>
                    <Route path={"/todolist/add"} element={<AddTodo/>}/>
                    <Route path={"/todolist/:id/edit"} element={<UpdateTodo/>}/>
                    <Route path={"/student"} element={<ListStudent/>}/>
                    <Route path={"/student/add"} element={<AddStudent/>}/>
                    <Route path={"/student/:id/edit"} element={<UpdateStudent/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
);
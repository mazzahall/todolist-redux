import { createSlice } from "@reduxjs/toolkit";

// Auto-generate ID sederhana
let nextId = 1;

export const studentSlice = createSlice({
    name: "student",
    initialState: [],
    reducers: {
        addStudent: (state, action) => {
            const { nama, kelas, alamat } = action.payload;
            state.push({ id: nextId++, nama, kelas, alamat });
        },
        removeStudent: (state, action) => {
            const { id } = action.payload;
            // Menghapus data berdasarkan id
            return state.filter(student => student.id !== id);
        },
        updateStudent: (state, action) => {
            const { id, nama, kelas, alamat } = action.payload;
            // Menggunakan .map() untuk mencari dan menimpa data seperti instruksi tugas
            return state.map(student =>
                student.id === id 
                    ? { ...student, nama, kelas, alamat } 
                    : student
            );
        }
    }
});

export const { addStudent, removeStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;
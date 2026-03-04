import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router"; // Tambahkan ini
import { removeStudent } from "./studentSlice.js";

export default function ListStudent() {
    const students = useSelector((state) => state.student);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Daftar Siswa</h1>
            <Link to="/">Kembali ke Home</Link> | <Link to="/student/add">Tambah Siswa</Link>
            <br /><br />
            <table border="1" cellPadding="5" style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Kelas</th>
                        <th>Alamat</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length === 0 ? (
                        <tr><td colSpan="5">Belum ada data siswa.</td></tr>
                    ) : (
                        students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.nama}</td>
                                <td>{student.kelas}</td>
                                <td>{student.alamat}</td>
                                <td>
                                    <button onClick={() => dispatch(removeStudent({ id: student.id }))}>
                                        Hapus
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
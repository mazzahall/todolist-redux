import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router"; 
import { removeStudent } from "./studentSlice.js";

export default function ListStudent() {
    const students = useSelector((state) => state.student);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Daftar Siswa</h2>
            <div style={{ marginBottom: '20px' }}>
                <Link to="/">Kembali ke Home</Link> | <Link to="/student/add">Tambah Siswa</Link>
            </div>
            
            <table>
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
                        <tr><td colSpan="5" style={{ textAlign: 'center' }}>Belum ada data siswa.</td></tr>
                    ) : (
                        students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.nama}</td>
                                <td>{student.kelas}</td>
                                <td>{student.alamat}</td>
                                <td>
                                    <Link to={`/student/${student.id}/edit`} style={{ marginRight: '10px' }}>
                                        Edit
                                    </Link>
                                    <button className="btn-danger" onClick={() => dispatch(removeStudent({ id: student.id }))}>
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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "./studentSlice.js";
import { useNavigate, useParams, Link } from "react-router";

export default function UpdateStudent() {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const student = useSelector((state) => 
        state.student.find(s => s.id === Number(params.id))
    );
    const [nama, setNama] = useState(student?.nama || '');
    const [kelas, setKelas] = useState(student?.kelas || '');
    const [alamat, setAlamat] = useState(student?.alamat || '');
    if (!student) {
        return (
            <div>
                <h2>Data Siswa tidak ditemukan!</h2>
                <Link to="/student">Kembali ke Daftar Siswa</Link>
            </div>
        );
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!nama || !kelas || !alamat) return alert("Semua kolom harus diisi!");
        dispatch(updateStudent({ id: student.id, nama, kelas, alamat }));
        navigate("/student"); 
    };

    return (
        <div>
            <h2>Edit Data Siswa</h2>
            <Link to="/student">Batal / Kembali</Link>
            <br /><br />
            <form onSubmit={handleUpdate}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Nama:</label>
                    <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Kelas:</label>
                    <input type="text" value={kelas} onChange={(e) => setKelas(e.target.value)} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Alamat:</label>
                    <input type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                </div>
                <button type="submit">Update Data</button>
            </form>
        </div>
    );
}
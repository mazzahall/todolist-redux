import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./studentSlice.js";
import { useNavigate } from "react-router"; // Tambahkan ini

export default function AddStudent() {
    const [nama, setNama] = useState('');
    const [kelas, setKelas] = useState('');
    const [alamat, setAlamat] = useState('');
    
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Tambahkan ini

    const handleSimpan = (e) => {
        e.preventDefault();
        if (!nama || !kelas || !alamat) return alert("Semua kolom harus diisi!");
        
        dispatch(addStudent({ nama, kelas, alamat }));
        
        // Pindah ke halaman list student setelah simpan
        navigate("/student"); 
    };

    return (
        <div>
            <h1>Tambah Data Siswa</h1>
            <form onSubmit={handleSimpan}>
                <div>
                    <input type="text" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                </div>
                <br />
                <div>
                    <input type="text" placeholder="Kelas" value={kelas} onChange={(e) => setKelas(e.target.value)} />
                </div>
                <br />
                <div>
                    <input type="text" placeholder="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                </div>
                <br />
                <button type="submit">Simpan</button>
            </form>
        </div>
    );
}
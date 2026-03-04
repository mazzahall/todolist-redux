import { Link } from "react-router";

export default function App() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Selamat Datang di Aplikasi Multi-Fitur!</h1>
            <p>Pilih menu di bawah ini:</p>
            
            <Link to="/todolist">
                <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
                    Buka Todo List
                </button>
            </Link>

            <Link to="/student">
                <button style={{ margin: '10px', padding: '10px 20px', cursor: 'pointer' }}>
                    Buka Data Siswa
                </button>
            </Link>
        </div>
    );
}
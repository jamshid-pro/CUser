import {useState} from 'react'
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import UserList from "./components/userList/UserList";

import "./App.css";
import Modal from './components/modal/Modal';



function App() {
    const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState([])

    const deleteUser = (id) => {
        setUsers((prev) => {
            return prev.filter((user) => user.id !== id)
        })
    }

    const addUser = (user) => {
        setUsers((prev) => [...prev, user])
        setShowModal(false)
    }


    const closeModal = (e) => {
        if(e.target.className === 'overlay') setShowModal(false)
        if(e.key === 'Escape') setShowModal(false)
    }

    return (
        <div onClick={closeModal} onKeyDown={closeModal} className="App" >
            <Navbar userLength={users.length} />
            
            <main>
                <div className="container">
                    <div className="no-user">
                        {users.length === 0 && <h2>No Users</h2>}
                    </div>
                    <UserList users={users} deleteUser={deleteUser} />
                </div>
                <button className='create-btn' onClick={() => setShowModal(true)}>create</button>
                {showModal && <Modal addUser={addUser} />}
            </main>

            <Footer />
        </div>
  );
}

export default App;

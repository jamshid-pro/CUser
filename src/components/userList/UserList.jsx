import './UserList.css'

import React from 'react'

function UserList({users, deleteUser}) {
  return (
    <div className='container'>
        <div className="list-wrapper">
                {users.map((user) => {
                    return (
                        <div className="card" key={user.id}>
                            <img src={user.image} className='card-image' alt="no img" />
                            <h3 className="card-title">
                                {user.firstname} {user.lastname}
                            </h3>
                            <p>age: {user.age}</p>
                            <p>from: {user.from}</p>
                            <p>Job: {user.job}</p>
                            <p>Gender: {user.gender}</p>
                            <button onClick={() => deleteUser(user.id)} className='card-button'>Delete</button>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default UserList
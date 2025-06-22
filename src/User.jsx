import React from 'react'

function User({user}) {
  return (
    <div className="user-card" >
        <h3>{user.firstName} {user.lastName} </h3>
        <p>{user.role}</p>
        <img src={user.image} />
    </div>
  )
}

export default User
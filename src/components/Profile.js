import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/user';
import { Navigate } from 'react-router-dom';
function Profile() {
  const state = useSelector( (state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <div className='profile'>
        {state.username?<div>
        <ul>
            <li>Username : {state.username}</li>
            <li>Email : {state.email}</li>
            <li>Avatar : {state.avatar}</li>
            <li>Gender : {state.gender}</li>
            <li>Role : {state.role}</li>
        </ul>
        <button 
        className='btn1'
        onClick={() => dispatch(logout())}>
            Deconnecter !{" "}
        </button>
        </div>:<Navigate to="/not_connected"/>}
    </div> 
  )
}

export default Profile;

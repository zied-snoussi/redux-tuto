import React from 'react'
import { useSelector } from 'react-redux';
function Profile() {
  const state = useSelector( (state) => state.user.value);
  return (
    <div className='profile'>
        <ul>
            <li>Email : {state.email}</li>
            <li>Nom : {state.nom}</li>
            <li>Prenom : {state.prenom}</li>
            <li>Adress : {state.adress}</li>
        </ul>
    </div> 
  )
}

export default Profile;

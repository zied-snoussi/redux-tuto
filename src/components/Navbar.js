import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const state = useSelector( (state) => state.user.value);
    return (
    <div className='navbar'>
        <div>
            <p>Logo</p>
        </div>
        <div>
            <ul className='sections'>
                <li>Section 1</li>
                <li>Section 2</li>
                <li>Section 3</li>
            </ul>
        </div>
        <div>
            {state.nom?<p>{state.prenom+" "+state.nom}</p>:<p>Login</p>}
        </div>
    </div>
  )
}

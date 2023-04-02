import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Navbar() {
    const state = useSelector( (state) => state.user.value);
    return (
    <div className='navbar'>
        <div>
            <Link to="/">Logo</Link>
        </div>
        <div>
            <ul className='sections'>
                <li><Link to="/">Home</Link></li>
                {state.username?<li><Link to="/dashboard">Dashboard</Link></li>:false}
                {state.role==="Admin"?<li><Link to="/admin">Admin</Link></li>:false}
            </ul>
        </div>
        <div>
            {state.username?<Link to="/profile">{state.username}</Link>:<Link to="/login">Login</Link>}
        </div>
    </div>
  )
}
export default Navbar;
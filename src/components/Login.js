import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/user';
function Login() {
    const dispatch = useDispatch()
    const user1 = { 
        username: "foulen-fouleni", 
        email: "foulen@gmail.com", 
        avatar: "Homme Avatar" , 
        gender: "M",
        role: "Admin", 
    }
    return (
    <div className='login'>
        <button 
        className='btn1'
        onClick={ () => 
            dispatch(
                login(user1)
            ) 
        }
        >
        se connecter !{" "}
        </button>
    </div>
  )
}

export default Login;
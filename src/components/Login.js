import React from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from './features/user';
function Login() {
    const dispatch = useDispatch()
    return (
    <div className='login'>
        <button 
        className='btn1'
        onClick={ () => 
            dispatch(
                login({ 
                    email: "foulen@gmail.com", 
                    nom: "fouleni", 
                    prenom: "foulen" , 
                    adress: "tunisie, afrique", 
                })
            ) 
        }
        >
        se connecter !{" "}
        </button>
        <button 
        className='btn1'
        onClick={() => dispatch(logout())}>
            Deconnexion !{" "}
        </button>
    </div>
  )
}

export default Login;
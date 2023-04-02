import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRouteAdmin = ({children}) => {
  const state = useSelector( (state) => state.user.value )
  return state.role==="admin"?children:<Navigate to="/not_connected"/>
}
export default ProtectedRouteAdmin;



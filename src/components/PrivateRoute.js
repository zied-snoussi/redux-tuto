import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const state = useSelector( (state) => state.user.value )
  return state.role==="Admin"?children:<Navigate to="/not_connected"/>
}
export default PrivateRoute;



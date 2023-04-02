import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const state = useSelector( (state) => state.user.value )
  return state.username?children:<Navigate to="/not_connected"/>
}
export default ProtectedRoute;



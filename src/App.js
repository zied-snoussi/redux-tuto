import React from "react";
import { Admin, AlertProtection, Dashboard, Home, Login, Navbar, PrivateRoute, Profile, ProtectedRoute } from "./components/index";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
        <Route path='/admin' element={
          <PrivateRoute>
            <Admin/>
          </PrivateRoute>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/not_connected' element={<AlertProtection/>}/>
        <Route path='/*' element={<h1 className="none">There's nothing here: 404!</h1>}/>
      </Routes>
    </div>
  );
}

export default App;

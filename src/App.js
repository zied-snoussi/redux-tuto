import React from "react";
import { Login, Navbar, Profile } from "./components/index";
import { store } from './Store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Navbar/>
      <Profile/>
      <Login/>
    </Provider>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Login from './components/Login';

function App() {
  const adminUser = {
    username: "sarahmurray",
    password :"123456!"
  }

 
  return (
    <div className="App">

<Login adminUser={adminUser}/>
    </div>
  );
}

export default App;

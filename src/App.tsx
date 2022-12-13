import React from 'react';
import './App.css';
import UserComponent from './components/UserComponent';
import UserAdressComponent from './components/UserAdressComponent';
import UserButton from './components/UserButton';
import FormPost from './components/FormPost';
function App() {
  return (
    <div className="App">
      <h1>Hello, Welcome to React and TypeScript</h1>
      {/* <UserComponent /> */}
      <h2>Somente nome</h2>
      <UserComponent nome="Caio" />
      <h2>Nome completo</h2>
      <UserComponent nome="Caio" sobrenome="Aleisson" />
      <UserAdressComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()}/>
      <UserButton/>
      <FormPost />
    </div>
  );
}

export default App;

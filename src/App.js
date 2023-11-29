import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="container mt-5">
      <h1>Formulario de Registro</h1>
      <RegistrationForm></RegistrationForm>
    </div>
  );
}
export default App;
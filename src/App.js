import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Register from './components/Register';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Form></Form>
       <Register></Register>
      </header>
    </div>
  );
}

export default App;

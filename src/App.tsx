import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;

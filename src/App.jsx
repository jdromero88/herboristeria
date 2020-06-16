import React from 'react';
import './App.css';
import Header from './container/Header'
import Content from './container/Content'
import Footer from './container/Footer'

function App() {
  return (
    <div className="App">
      <Header />
        <Content />
      <Footer />
    </div>
  );
}

export default App;

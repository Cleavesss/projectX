import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <div className='menu'>
          Тут будет меню - изменения должны быть тут
        </div>
        <div>
          <div className='content'>
            HelloWorld
            <div className='childContent'>
              Дочерний элемент - и тут
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

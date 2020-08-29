import React, {useState} from 'react';
import './App.css';

import Show from './icons/show.svg';
import Hide from './icons/hide.svg';

function App() {
  const [icon, setIcon] = useState(Show);
  const [type, setType] = useState('password');
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    if(isVisible === false) {
      setIcon(Hide);
      setType('text');
      setIsVisible(true);
    } else {
      setIcon(Show);
      setType('password')
      setIsVisible(false);
    }
  }

  return (
    <div className="container">
      <p>wow este formulário é incrivel!!!!!</p>
      <form className="form" action="">
        <input 
          className="input" 
          placeholder="Usuário" 
          type="text"
        />
        <input 
          className="input" 
          placeholder="Senha"
          type={type} 
        />
        <img 
          src={icon} 
          className="icon"
          onClick={handleVisibility}
        />
        <button className="button">Login</button>
      </form>
    </div>
  );
}

export default App;

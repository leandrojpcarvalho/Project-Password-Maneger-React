import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import BtnNewPass from './components/BtnNewPass';

const objButton = {
  registerNewPass: false,
  cancel_form: false,
};

function App() {
  const [objControlButton, setControlButton] = useState(objButton);

  const handleButtonCancel = () => {
    setControlButton({ ...objButton, cancel_form: true });
  };
  const handleBtnNewPass = () => {
    setControlButton({ ...objButton, registerNewPass: true });
  };
  return (
    <>
      <header>
        <h1>Gerenciador de senhas</h1>
      </header>
      <main>
        {objControlButton.registerNewPass
          ? <Form
              handleClick={ handleButtonCancel }
          />
          : <BtnNewPass handleClick={ handleBtnNewPass } />}
      </main>
    </>
  );
}

export default App;

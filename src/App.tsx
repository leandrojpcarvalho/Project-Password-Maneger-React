import { useState } from 'react';
import BtnNewPass from './components/BtnNewPass';
import ManagedPassList from './components/ManagedPassList/ManagedPassList';
import Form, { ObjPassword } from './components/Form/Form';
import { ObjId } from './types';
import './App.css';

const OBJ_PASS = {
  service: '',
  login: '',
  password: '',
  url: '',
};

const OBJ_VALIDATE = {
  service: false,
  login: false,
  charLengthMoreThanEigth: false,
  charLengthLessThanSixTeen: false,
  letterAndNumb: false,
  special: false,
};

function App() {
  const [objControlButton, setControlButton] = useState(false);
  const [objRegisterPass, setObjRegisterPass] = useState(OBJ_PASS);
  const [objPassword, setObjPassword] = useState(OBJ_VALIDATE);
  const [arrRegister, setArrRegister] = useState<Array<ObjId>>([]);

  const resetStates = () => {
    setControlButton(false);
    setObjRegisterPass(OBJ_PASS);
    setObjPassword(OBJ_VALIDATE);
  };

  const handleArrRegister = (obj: ObjPassword) => {
    const objWithId = { ...obj, id: Date.now() };
    setArrRegister([...arrRegister, objWithId]);
    resetStates();
  };

  const handleRmvRegister = (id: number) => setArrRegister(
    arrRegister.filter((register) => register.id !== Number(id)),
  );

  const validatePassword = (state: ObjPassword) => {
    const { service, login, password } = state;
    setObjPassword(() => ({
      ...objPassword,
      service: service.length > 0,
      login: login.length > 0,
      charLengthLessThanSixTeen: password.length <= 16 && password.length > 0,
      charLengthMoreThanEigth: password.length >= 8,
      letterAndNumb: validateLetterAndNumber(password),
      special: validateSpecial(password),
    }));
  };

  const validateLetterAndNumber = (password: string) => {
    const lett = password.split('').find((letter) => {
      return !arrSpecial.includes(letter) && Number.isNaN(Number(letter));
    });
    const numb = password
      .split('')
      .find((letter) => !Number.isNaN(Number(letter)));
    return Boolean(lett) && Boolean(numb);
  };

  const arrSpecial = ['!', '#', '@'];
  const validateSpecial = (password: string) => {
    const hasSpecial = password
      .split('')
      .find((letter) => arrSpecial.find((specialChar) => specialChar === letter));
    return typeof hasSpecial === 'string';
  };

  const handleRegisterPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjRegisterPass((prevObj) => {
      const state = { ...prevObj, [event.target.id]: event.target.value };
      validatePassword(state);
      return state;
    });
  };

  return (
    <>
      <header className="box-shadow border">
        <h1>Gerenciador de senhas</h1>
      </header>
      <main>
        {objControlButton ? (
          <Form
            handleClick={ () => resetStates() }
            handleNewPass={ handleRegisterPass }
            objPass={ objRegisterPass }
            objPassword={ objPassword }
            handleArrRegister={ handleArrRegister }
          />
        ) : (
          <>
            <BtnNewPass handleClick={ () => setControlButton(true) } />
            <ManagedPassList
              state={ arrRegister }
              removeRegister={ handleRmvRegister }
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;

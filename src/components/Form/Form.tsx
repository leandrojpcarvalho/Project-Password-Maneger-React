import { useState } from 'react';
import Swal from 'sweetalert2';
import Display from '../Display/Display';
import Preview from '../preview/Preview';

export type ObjPassword = {
  service: string;
  login: string;
  password: string;
  url: string;
};

type ValidatePassword = {
  service: boolean;
  login: boolean;
  charLengthMoreThanEigth: boolean;
  charLengthLessThanSixTeen: boolean;
  letterAndNumb: boolean;
  special: boolean;
};

type FormType = {
  handleClick: () => void;
  handleNewPass: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleArrRegister: (param: ObjPassword) => void;
  objPassword: ValidatePassword;
  objPass: ObjPassword;
};

function Form(props: FormType) {
  const [isVisible, setIsVisible] = useState(false);

  const { handleClick, handleNewPass, handleArrRegister, objPassword, objPass } = props;
  const isDisabled = () => {
    return Object.values(objPassword).includes(false);
  };

  const cleanForm = () => {
    document.querySelectorAll('input').forEach((input) => {
      input.value = '';
    });
  };

  const handleSetList = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    cleanForm();
    handleArrRegister(objPass);
    handleClick();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Serviço cadastrado com sucesso',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleClickSetVisible = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  return (
    <section className="container content row">
      <form className="container">
        <h3>Cadstro de gerenciamento de senha</h3>
        <div>
          <label htmlFor="service">Nome do serviço</label>
          <input
            type="text"
            id="service"
            onChange={ (event) => handleNewPass(event) }
          />
          <label htmlFor="login">Login</label>
          <input type="text" id="login" onChange={ (event) => handleNewPass(event) } />
        </div>
        <div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              type={ isVisible ? 'text' : 'password' }
              id="password"
              onChange={ handleNewPass }
            />
            <button
              data-testid="show-hide-form-password"
              onClick={ handleClickSetVisible }
            >
              P
            </button>
          </div>
          <label htmlFor="url">URL</label>
          <input type="text" id="url" onChange={ (event) => handleNewPass(event) } />
        </div>
        <div>
          <button
            id="register"
            onClick={ (e) => handleSetList(e) }
            disabled={ isDisabled() }
          >
            Cadastrar
          </button>
          <button id="cancel" onClick={ handleClick }>Cancelar</button>
        </div>
        <Display { ...objPassword } />
      </form>
      <Preview objPass={ objPass } />
    </section>
  );
}

export default Form;

import { useState } from 'react';
import Swal from 'sweetalert2';
import Display from './Display/Display';
import Preview from './preview/Preview';
import { objIcons } from '../../assets/data-image';
import './Form.css';

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
      <form className="container glass">
        <h3>Cadastro</h3>
        <label htmlFor="service">Nome do serviço</label>
        <input
          className="border input"
          placeholder="Nome do Serviço"
          type="text"
          id="service"
          onChange={ (event) => handleNewPass(event) }
        />
        <label htmlFor="login">Login</label>
        <input
          className="border input"
          placeholder="Login"
          type="text"
          id="login"
          onChange={ (event) => handleNewPass(event) }
        />
        <label htmlFor="url">URL</label>
        <input
          placeholder="URL"
          className="border input"
          type="text"
          id="url"
          onChange={ (event) => handleNewPass(event) }
        />
        <label htmlFor="password">Senha</label>
        <div className="container row">
          <input
            id="password"
            className="border input"
            placeholder="Senha"
            type={ isVisible ? 'text' : 'password' }
            onChange={ handleNewPass }
          />
          <button
            id="btn-visible"
            data-testid="show-hide-form-password"
            onClick={ handleClickSetVisible }
          >
            <img
              src={ isVisible ? objIcons.visible : objIcons.invsible }
              alt="visivel"
            />
          </button>
        </div>
        <Display { ...objPassword } />
        <div className="container content">
          <button
            className={ `btn ${isDisabled() ? '' : 'active'} ` }
            id="register"
            onClick={ (e) => handleSetList(e) }
            disabled={ isDisabled() }
          >
            Cadastrar
          </button>
          <button className="btn cancel" onClick={ handleClick }>Cancelar</button>
        </div>
      </form>
    </section>
  );
}

export default Form;

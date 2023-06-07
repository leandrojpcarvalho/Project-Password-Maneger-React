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
  objPassword: ValidatePassword;
  objPass: ObjPassword;
};

function Form({ handleClick, handleNewPass, objPassword, objPass }: FormType) {
  const isDisabled = () => {
    return Object.values(objPassword).includes(false);
  };

  return (
    <>
      <form className="container">
        <div>
          <label htmlFor="service">Nome do serviço</label>
          <input type="text" id="service" onChange={ (event) => handleNewPass(event) } />
          <label htmlFor="login">Login</label>
          <input type="text" id="login" onChange={ (event) => handleNewPass(event) } />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" onChange={ handleNewPass } />
          <label htmlFor="url">URL</label>
          <input type="text" id="url" onChange={ (event) => handleNewPass(event) } />
        </div>
        <div>
          <button id="register" disabled={ isDisabled() }>Cadastrar</button>
          <button id="cancel" onClick={ handleClick }>Cancelar</button>
        </div>
      </form>
      <Display { ...objPassword } />
      <Preview objPass={ objPass } />
    </>
  );
}

export default Form;

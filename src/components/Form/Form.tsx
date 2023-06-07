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
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" onChange={ handleNewPass } />
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

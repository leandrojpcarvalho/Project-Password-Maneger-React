import { BtnFunction } from '../BtnNewPass';

function Form({ handleClick }:BtnFunction) {
  return (
    <form className="container">
      <div>
        <label htmlFor="service">Nome do serviço</label>
        <input type="text" id="service" />
        <label htmlFor="login">Login</label>
        <input type="text" id="login" />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />
        <label htmlFor="url">URL</label>
        <input type="text" id="url" />
      </div>
      <div>
        <button id="register">Cadastrar</button>
        <button id="cancel" onClick={ handleClick }>Cancelar</button>
      </div>
    </form>
  );
}

export default Form;

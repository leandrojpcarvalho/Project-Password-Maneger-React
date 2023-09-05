import { ObjId } from '../../types';
import './card.css';

type CardType = {
  objPass: ObjId;
  removeRegister: (param: number) => void;
  isChecked: boolean;
};

function Card({ objPass, removeRegister, isChecked }: CardType) {
  const { service, login, password, url, id: nubmerId } = objPass;
  return (
    <div>
      <section className="card box-shadow border">
        <a href={ url } rel="noreferrer" target="_blank">{ service }</a>
        <p>Login:  </p>
        <p>{login}</p>
        <p>Senha: </p>
        <p>{ isChecked ? '******' : password}</p>
        <button
          id={ nubmerId.toString() }
          data-testid="remove-btn"
          className="btn"
          type="submit"
          onClick={ (event) => (removeRegister(event.target.id)) }
        >
          Excluir
        </button>
      </section>
    </div>
  );
}

export default Card;

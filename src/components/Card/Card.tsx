import { ObjId } from '../../types';

type CardType = {
  objPass: ObjId;
  removeRegister: (param: number) => void;
  isChecked: boolean;
};

function Card({ objPass, removeRegister, isChecked }: CardType) {
  const { service, login, password, url, id: nubmerId } = objPass;
  return (
    <section className="card">
      <button
        id={ nubmerId.toString() }
        data-testid="remove-btn"
        type="submit"
        onClick={ ({ target: { id } }) => (removeRegister(id)) }
      >
        X
      </button>
      <a href={ url }>{ service }</a>
      <p>{login}</p>
      <p>{ isChecked ? '******' : password}</p>
    </section>
  );
}

export default Card;

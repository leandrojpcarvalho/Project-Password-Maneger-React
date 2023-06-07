import { ObjId } from '../../types';

type CardType = {
  objPass: ObjId;
  removeRegister: (param: number) => void;
};

function Card({ objPass, removeRegister }: CardType) {
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
      <ul>
        <li>{ login}</li>
        <li>{ password }</li>
      </ul>
    </section>
  );
}

export default Card;

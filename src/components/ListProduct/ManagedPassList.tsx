import Card from '../Card/Card';
import { ObjId } from '../../types';

type ListPass = {
  state: ObjId[] ;
  removeRegister: (param: number) => void;
};

function ManagedPassList({ state, removeRegister }: ListPass) {
  return (
    <section className="list-password">
      {state.length !== 0
        ? state
          .map((card) => (<Card
            key={ card.id }
            objPass={ card }
            removeRegister={ removeRegister }
          />))
        : <h3>Nenhuma senha cadastrada</h3>}
    </section>
  );
}

export default ManagedPassList;

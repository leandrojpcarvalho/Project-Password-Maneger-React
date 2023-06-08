import { useState } from 'react';
import Card from '../Card/Card';
import { ObjId } from '../../types';

type ListPass = {
  state: ObjId[] ;
  removeRegister: (param: number) => void;
};

function ManagedPassList({ state, removeRegister }: ListPass) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section className="list-password">
      {state.length !== 0 ? (
        <>
          <div>
            <label htmlFor="show-password">Esconder senhas</label>
            <input
              type="checkbox"
              name=""
              id="show-password"
              onChange={ () => setIsChecked(!isChecked) }
            />
          </div>
          {state.map((card) => (
            <Card
              key={ card.id }
              objPass={ card }
              removeRegister={ removeRegister }
              isChecked={ isChecked }
            />
          ))}
        </>
      ) : (
        <h3>Nenhuma senha cadastrada</h3>
      )}
    </section>
  );
}

export default ManagedPassList;

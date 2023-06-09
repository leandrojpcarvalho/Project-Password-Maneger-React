import { useState } from 'react';
import Card from '../Card/Card';
import { ObjId } from '../../types';
import './ManagedPass.css';

type ListPass = {
  state: ObjId[] ;
  removeRegister: (param: number) => void;
};

function ManagedPassList({ state, removeRegister }: ListPass) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <section className="list-password glass">
      {state.length !== 0 ? (
        <>
          <div className="show-password container row">
            <p>Esconder password</p>
            <label htmlFor="show-password" className="show-password switch">
              <input
                type="checkbox"
                id="show-password"
                onChange={ () => setIsChecked(!isChecked) }
              />
              <span className="slider round"> Esconder senhas</span>
            </label>
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

export type BtnFunction = {
  handleClick: () => void;
};

function BtnNewPass({ handleClick }:BtnFunction) {
  return (
    <button
      onClick={ handleClick }
    >
      Cadastrar nova senha
    </button>
  );
}

export default BtnNewPass;

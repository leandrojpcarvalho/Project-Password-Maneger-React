export type BtnFunction = {
  handleClick: () => void;
};

function BtnNewPass({ handleClick }:BtnFunction) {
  return (
    <button
      className="btn new-pass"
      onClick={ handleClick }
    >
      Cadastrar nova senha
    </button>
  );
}

export default BtnNewPass;

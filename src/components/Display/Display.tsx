type ValidPass = {
  charLengthMoreThanEigth: boolean;
  charLengthLessThanSixTeen: boolean;
  letterAndNumb: boolean;
  special: boolean;
};

function Display(props: ValidPass) {
  const {
    charLengthLessThanSixTeen,
    charLengthMoreThanEigth,
    letterAndNumb,
    special,
  } = props;

  const invalid = 'invalid-password-check';
  const valid = 'valid-password-check';
  return (
    <div className="display">
      <p
        className={ charLengthMoreThanEigth
          ? valid : invalid }
      >
        Possuir 8 ou mais caracteres
      </p>
      <p
        className={ charLengthLessThanSixTeen
          ? valid : invalid }
      >
        Possuir até 16 caracteres
      </p>
      <p className={ letterAndNumb ? valid : invalid }>Possuir letras e números</p>
      <p className={ special ? valid : invalid }>Possuir algum caractere especial</p>
    </div>
  );
}

export default Display;

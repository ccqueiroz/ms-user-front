import { InputTextInterface } from './InputTextInterface';
import './index.styles.css';
const InputText = ({ id, label, disabled, error, ...rest }: InputTextInterface) => {
  return (
    <div className="containerInput">
      <label htmlFor={id} className={`labelInput ${error ? 'labelInputError' : 'labelInputDefault'}`}>
        {label}
      </label>
      <input
        id={id}
        className={`inputCustom ${error ? 'borderInputError' : 'borderInputDefault'}`}
        disabled={disabled}
        {...rest}
      />
      {!!error && <span>error</span>}
    </div>
  );
};

export default InputText;

//This component is a custom input

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.text}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        name={props.id}
        readOnly={props.readOnly || false}
        defaultValue={props.defaultValue || props.value}
      />
    </div>
  );
};

export default Input;

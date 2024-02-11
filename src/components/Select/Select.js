import { useState } from "react";
import styles from "./Select.module.css";

//This component is a custom creature's select

const SelectList = (props) => {
  return (
    <div className={styles.modal}>
      {props.creature.map((el) => {
        const check = el.id === props.id;
        return (
          <div key={el.id}>
            <label htmlFor={el.id}>{el.name}</label>
            <input
              id={el.id}
              type="radio"
              name="radio"
              value={el.name}
              onChange={props.onChange}
              onClick={props.onClick}
              checked={check}
            />
          </div>
        );
      })}
    </div>
  );
};

const Select = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibilityHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.select}>
      <label htmlFor="select_creatures">{props.value}</label>
      <input
        type="button"
        id="select_creatures"
        value="Выбрать"
        onClick={setVisibilityHandler}
      />
      {!isVisible || (
        <SelectList
          creature={props.creature}
          onChange={props.onChange}
          onClick={setVisibilityHandler}
          id={props.id}
        />
      )}
    </div>
  );
};

export default Select;

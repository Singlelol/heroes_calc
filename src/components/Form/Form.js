import { useState } from "react";
import CREATURES_CHARACTERISTICS from "../data/creatures";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";
import styles from "./Form.module.css";

const Form = () => {
  const [сreature, setCreature] = useState(CREATURES_CHARACTERISTICS[0]);

  const changeCreatureHandler = (event) => {
    const result = CREATURES_CHARACTERISTICS.filter(
      (el) => el.name === event.target.value
    );
    setCreature(...result);
  };

  return (
    <form>
      <div class="select">
        <label htmlFor="select_creatures">Список существ</label>
        <select id="select_creatures" onChange={changeCreatureHandler}>
          {CREATURES_CHARACTERISTICS.map((el) => {
            return (
              <option value={el.name} key={el.id}>
                {el.name}
              </option>
            );
          })}
        </select>
      </div>
      <Card name={сreature.name}>
        <Cards creature={сreature} />
      </Card>
      <div>
        <label htmlFor="creature">creature</label>
        <input type="number" id="creature" min={"1"} name="creature" />
      </div>
    </form>
  );
};

export default Form;

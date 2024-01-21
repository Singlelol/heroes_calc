import { useState } from "react";
import CREATURES_CHARACTERISTICS from "../data/creatures";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";
import Select from "../Select/Select";
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
      <Select
        onChange={changeCreatureHandler}
        creature={CREATURES_CHARACTERISTICS}
        value={сreature.name}
        id={сreature.id}
      />
      <Card name={сreature.name}>
        <Cards creature={сreature} />
      </Card>
      <div className={styles.amount}>
        <label htmlFor="creature">Количество</label>
        <input type="number" id="creature" min={"1"} name="creature" />
      </div>
    </form>
  );
};

export default Form;

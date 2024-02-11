import { useState } from "react";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";
import Select from "../Select/Select";
import styles from "./Section.module.css";

//This component is a creature's section

const Section = (props) => {
  const [сreature, setCreature] = useState(props.creatures[0]);

  //This function sets creature in section

  const changeCreatureHandler = (event) => {
    const result = props.creatures.filter(
      (el) => el.name === event.target.value
    );
    setCreature(...result);
  };

  return (
    <section id={props.id}>
      <Select
        onChange={changeCreatureHandler}
        creature={props.creatures}
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
    </section>
  );
};

export default Section;

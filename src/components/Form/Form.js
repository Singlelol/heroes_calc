import { useState } from "react";
import CREATURES_CHARACTERISTICS from "../data/creatures";

const Form = () => {
  const [nameCreature, setNameCreature] = useState(
    CREATURES_CHARACTERISTICS[0]
  );

  const changeCreatureHandler = (event) => {
    const result = CREATURES_CHARACTERISTICS.filter(
      (el) => el.name === event.target.value
    );
    setNameCreature(...result);
    console.log(...result);
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
      <div>
        <h2>{nameCreature.name}</h2>
        <div>
          <label htmlFor="attack">Атака</label>
          <input
            type="number"
            id="attack"
            value={nameCreature.attack}
            name="attack"
            readOnly
          />
          <label htmlFor="defense">Защита</label>
          <input
            type="number"
            id="defense"
            value={nameCreature.defense}
            name="defense"
            readOnly
          />
          <label htmlFor="damage">Урон</label>
          <input
            type="text"
            id="damage"
            value={`${nameCreature.damage.min} - ${nameCreature.damage.max}`}
            name="damage"
            readOnly
          />
          <label htmlFor="hitpoint">Здоровье</label>
          <input
            type="number"
            id="hitpoint"
            value={nameCreature.hitPoints}
            name="hitpoint"
            readOnly
          />
          <label htmlFor="speed">Скорость</label>
          <input
            type="number"
            id="speed"
            value={nameCreature.speed}
            name="speed"
            readOnly
          />
        </div>
      </div>
      <div>
        <label htmlFor="creature">creature</label>
        <input type="number" id="creature" min={"1"} name="creature" />
      </div>
    </form>
  );
};

export default Form;

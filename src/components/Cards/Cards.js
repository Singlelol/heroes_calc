import Input from "../Input/Input";
import styles from "./Cards.module.css";

/*This component is the creature's stat card*/

const Cards = (props) => {
  const INPUT_PARAMETR = [
    {
      id: "attack",
      text: "Атака",
      value: `${props.creature.attack}`,
      type: "text",
      readOnly: true,
    },
    {
      id: "defense",
      text: "Защита",
      value: `${props.creature.defense}`,
      type: "text",
      readOnly: true,
    },
    {
      id: "damage",
      text: "Урон",
      value: `${props.creature.damage.min} - ${props.creature.damage.max}`,
      type: "text",
      readOnly: true,
    },
    {
      id: "hitpoint",
      text: "Здоровье",
      value: `${props.creature.hitPoints}`,
      type: "text",
      readOnly: true,
    },
    {
      id: "speed",
      text: "Скорость",
      value: `${props.creature.speed}`,
      type: "text",
      readOnly: true,
    },
  ];

  return (
    <div className={styles.stats_block}>
      {INPUT_PARAMETR.map((el) => {
        return (
          <Input
            key={el.id}
            id={el.id}
            text={el.text}
            value={el.value}
            type={el.type}
            readOnly={el.readOnly}
          />
        );
      })}
    </div>
  );
};

export default Cards;

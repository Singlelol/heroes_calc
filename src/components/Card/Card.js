import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div class={styles.card}>
      <h2>{props.name}</h2>
      {props.children}
    </div>
  );
};

export default Card;

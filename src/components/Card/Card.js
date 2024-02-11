import styles from "./Card.module.css";

/*This component is a wrapper*/

const Card = (props) => {
  return (
    <div className={styles.card}>
      <h2>{props.name}</h2>
      {props.children}
    </div>
  );
};

export default Card;

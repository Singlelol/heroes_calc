import Section from "../Section/Section";
import CREATURES_CHARACTERISTICS from "../data/creatures";
import styles from "./CreaturesCalc.module.css";

const CreaturesCalc = (props) => {
  const ROLES_SECTION = ["first", "second"];

  const SubmitHandler = (event) => {
    event.preventDefault();
    for (const el of event.target) {
      el.className = "";
      if (!el.value) {
        el.className = styles.invalid;
        el.focus();
        return;
      }
    }
    props.getCreatureStat(event.target);
  };

  return (
    <main>
      <form
        className={styles.wrap}
        method="POST"
        name="form"
        id="form"
        onSubmit={SubmitHandler}
      >
        {ROLES_SECTION.map((el) => {
          return (
            <Section creatures={CREATURES_CHARACTERISTICS} key={el} id={el} />
          );
        })}
      </form>
      <section className={styles.section}>
        <button type="submit" form="form" name="submit" value="Сравнить">
          Сравнить
        </button>
      </section>
    </main>
  );
};

export default CreaturesCalc;

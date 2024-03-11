import CreaturesCalc from "./components/CreaturesCalc/CreaturesCalc";
//import styles from "./App.module.css";

const calc = ([first, second]) => {
  const minmax = (min, max) => Math.round(min + Math.random() * (max - min));

  const baseDamage = (min, max, value) => {
    let result = 0;
    const count = value > 10 ? 10 : value;
    for (let i = 0; i < count; i++) {
      result += minmax(min, max);
    }
    if (value > 10) {
      return Math.floor(0.1 * value * result);
    }
    return result;
  };

  const modificateDamageFirst = (attack, defense) => {
    return attack > defense ? 0.05 * (attack - defense) : 0;
  };

  const modificateDamageSecond = (attack, defense) => {
    return defense > attack ? 1 - 0.025 * (defense - attack) : 1;
  };

  const damageFirst = Math.round(
    baseDamage(+first.min, +first.max, +first.value) *
      (1 + modificateDamageFirst(+first.attack, +second.defense)) *
      modificateDamageSecond(+first.attack, +second.defense)
  );

  const valueSecond = Math.max(
    Math.ceil((second.value * second.health - damageFirst) / second.health),
    0
  );

  const damageSecond = Math.round(
    baseDamage(+second.min, +second.max, valueSecond) *
      (1 + modificateDamageFirst(+second.attack, +first.defense)) *
      modificateDamageSecond(+second.attack, +first.defense)
  );

  const valueFirst = Math.max(
    Math.ceil((first.value * first.health - damageSecond) / first.health),
    0
  );
  const resultString = `${first.value} ${first.name} атаковали ${
    second.value
  } ${second.name}. Они нанесли им ${damageFirst} урона и убили ${
    second.value - valueSecond
  } ${second.name}. В ответной атаке ${valueSecond} ${
    second.name
  } нанесли ${damageSecond} урона и убили ${first.value - valueFirst} ${
    first.name
  }`;
  console.log(resultString);

  return [damageFirst, valueFirst, damageSecond, valueSecond];
};

function App() {
  const getCreatureStat = (creature) => {
    const minDamage = /^([0-9]{1,})/gm;
    const maxDamage = /([0-9]{1,})$/gm;
    const creatureStat = [
      {
        name: creature[0].value,
        attack: creature[1].value,
        defense: creature[2].value,
        min: creature[3].value.match(minDamage).join(""),
        max: creature[3].value.match(maxDamage).join(""),
        health: creature[4].value,
        value: creature[6].value,
      },
      {
        name: creature[7].value,
        attack: creature[8].value,
        defense: creature[9].value,
        min: creature[10].value.match(minDamage).join(""),
        max: creature[10].value.match(maxDamage).join(""),
        health: creature[11].value,
        value: creature[13].value,
      },
    ];
    calc(creatureStat);
  };
  return <CreaturesCalc getCreatureStat={getCreatureStat} />;
}

export default App;

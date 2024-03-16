import CreaturesCalc from "./components/CreaturesCalc/CreaturesCalc";
//import styles from "./App.module.css";

const calc = ([first, second]) => {
  //Функция рандомизации урона

  const minmax = (min, max) => Math.round(min + Math.random() * (max - min));

  //Функция вычисления базового урона на основании рандомизации урона и количества существ

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

  //Функция модификатора урона с учетом атаки и защиты

  const modificateDamage = (attack, defense) => {
    const [attackNum, defenseNum] = [+attack, +defense];

    if (attackNum > defenseNum) {
      return 1 + 0.05 * (attackNum - defenseNum);
    } else if (defenseNum > attackNum) {
      return 1 - 0.025 * (defenseNum - attackNum);
    }
    return 1;
  };

  //Функция расчета урона при атаке

  const damageFirst = Math.round(
    baseDamage(first.min, first.max, first.value) *
      modificateDamage(first.attack, second.defense)
  );

  //Функция рассчета количества живых существ в атакованном отряде

  const valueSecond = Math.max(
    Math.ceil((+second.value * +second.health - damageFirst) / +second.health),
    0
  );

  //Функция рассчета урона при контратаке

  const damageSecond = Math.round(
    baseDamage(second.min, second.max, valueSecond) *
      modificateDamage(second.attack, first.defense)
  );

  //Функция рассчета живых существ в атакующем отряде

  const valueFirst = Math.max(
    Math.ceil((+first.value * +first.health - damageSecond) / +first.health),
    0
  );

  //Функция генерации ответа для вывода на экран

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

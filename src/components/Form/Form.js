import creatures from "../data/creatures";

const Form = () => {
  return (
    <form>
      <label htmlFor="select_creatures">select_creatures</label>
      <input
        type="text"
        id="select_creatures"
        name="select_creatures"
        list="creatures_list"
      />
      <datalist id="creatures_list">
        <option value="Chocolate"></option>
        <option value="Coconut"></option>
        <option value="Mint"></option>
        <option value="Strawberry"></option>
        <option value="Vanilla"></option>
      </datalist>
      <div>
        <h2>Name</h2>
        <div>
          <label htmlFor="attack">attack</label>
          <input type="number" id="attack" value={"1"} name="attack" readOnly />
          <label htmlFor="defense">defense</label>
          <input
            type="number"
            id="defense"
            value={"1"}
            name="defense"
            readOnly
          />
          <label htmlFor="damage">damage</label>
          <input type="text" id="damage" value={"1"} name="damage" readOnly />
          <label htmlFor="hitpoint">hitpoint</label>
          <input
            type="number"
            id="hitpoint"
            value={"1"}
            name="hitpoint"
            readOnly
          />
          <label htmlFor="speed">speed</label>
          <input
            type="number"
            id="speed"
            value={"1"}
            min={"1"}
            name="speed"
            readOnly
          />
        </div>
      </div>
      <div>
        <label htmlFor="creature">creature</label>
        <input
          type="number"
          id="creature"
          value={"1"}
          min={"1"}
          name="creature"
        />
      </div>
    </form>
  );
};

export default Form;

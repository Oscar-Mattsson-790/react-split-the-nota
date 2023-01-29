import "./InputForm.css";

function InputForm() {
  const foodBill = {
    cost: "",
    numberOfFriends: "",
    tip: "",
  };

  function calcBill() {
    const tip = Number(foodBill.cost) * Number(foodBill.tip);
    const totalCost = Number(foodBill.cost) + tip;
    const costPerPerson = totalCost / Number(foodBill.numberOfFriends);

    console.log(`Varje person skall betala: ${costPerPerson}kr`);
  }

  function handleClick() {
    calcBill();
  }

  return (
    <div className="wrapper">
      <h2>Split the nota</h2>
      <section className="form" id="inputForm">
        <section>
          <input
            type="text"
            id="sum"
            className="form__input"
            required
            onChange={(event) => {
              foodBill.cost = event.target.value;
            }}
          />
          <label htmlFor="sum" className="form__label form__label_sum">
            Summa
          </label>
        </section>
        <section>
          <input
            type="text"
            id="numberOfFriends"
            className="form__input"
            required
            onChange={(event) => {
              foodBill.numberOfFriends = event.target.value;
            }}
          />
          <label
            htmlFor="numberOfFriends"
            className="form__label form__label_friends"
          >
            Antal vänner
          </label>
        </section>
        <section>
          <input
            type="text"
            id="tip"
            className="form__input"
            required
            onChange={(event) => {
              foodBill.tip = event.target.value;
            }}
          />
          <label htmlFor="tip" className="form__label form__label_tip">
            Dricks
          </label>
        </section>
        <button
          id="calculateButton"
          className="form__button"
          onClick={handleClick}
        >
          Räkna
        </button>
      </section>
      <section className="form hide" id="showSum">
        <article>
          <h2>Varje person ska betala</h2>
          <h3 id="friendSum" className="show-sum"></h3>
        </article>
      </section>
    </div>
  );
}

export default InputForm;

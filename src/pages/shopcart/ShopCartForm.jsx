const ShopCardForm = () => {
  return (
    <form className="shopcard__order__form">
      <input
        type="text"
        className="shopcard__order__text shopcard__order_input"
        placeholder="Promocode"
      />
      <button className="shopcard__order__text shopcard__order_btn">Apply</button>
    </form>
  );
};

export default ShopCardForm;

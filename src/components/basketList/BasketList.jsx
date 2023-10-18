import { BasketItem } from "../basketItem/BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket_list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
          />
        ))
      ) : (
        <li className="collection-item ">Корзина пyста</li>
      )}
      <li className="collection-item active ">
        Обшая стоимость: {totalPrice} руб
      </li>
      <li className="collection-item">
        <button className=" btn btn-small">Оформит</button>
      </li>

      <i className="material-icons basket_close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export { BasketList };

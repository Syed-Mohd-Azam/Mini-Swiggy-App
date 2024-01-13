import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./constants/cartSlice";
import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();
  console.log(cartItems);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <section className="w-4/5 mx-auto py-2">
        <section className="m-6 text-center font-bold text-2xl py-2">
          {cartItems?.length > 0
            ? `Cart Items ( ${cartItems?.length} items )`
            : `No Items in the Cart !`}
        </section>
        <section className="text-center">
          <button
            className="bg-purple-50 text-black font-bold p-2 rounded-xl hover:bg-black hover:text-purple-50"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </section>
        {cartItems?.length > 0
          ? cartItems?.map((item) => (
              <CartItem item={item} key={item?.info?.id} />
            ))
          : null}
      </section>
    </>
  );
};
export default Cart;


import { showCustomToast } from "../../components/Notification";
import { asyncUpdateUser } from "./userAction";

export const cartHandler = (id, user, dispatch) => {
  const copyuser = { ...user, cart: [...user.cart] };
  const index = copyuser.cart.findIndex((item) => item.productId === id);

  if (index !== -1) {
    copyuser.cart[index] = { productId: id, quantity: copyuser.cart[index].quantity + 1 };
  } else {
    copyuser.cart.push({ productId: id, quantity: 1 });
  }

  dispatch(asyncUpdateUser(user.id, copyuser));
  showCustomToast("Product added to cart successfully", "success");
};

export const increaseCart = (id, user, dispatch) => {
  const copyuser = { ...user, cart: [...user.cart] };
  const index = copyuser.cart.findIndex((item) => item.productId === id);
  copyuser.cart[index] = { productId: id, quantity: copyuser.cart[index].quantity + 1 };
  dispatch(asyncUpdateUser(user.id, copyuser));
  
  
};

export const decreaseCart = (id, user, dispatch) => {
  const copyuser = { ...user, cart: [...user.cart] };
  const index = copyuser.cart.findIndex((item) => item.productId === id);
  copyuser.cart[index] = { productId: id, quantity: copyuser.cart[index].quantity - 1 };
  if(copyuser.cart[index].quantity === 0) copyuser.cart.splice(index, 1);
  dispatch(asyncUpdateUser(user.id, copyuser));
  
};
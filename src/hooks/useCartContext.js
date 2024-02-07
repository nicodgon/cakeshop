import { useContext } from "react";
import { cartContext } from "../helpers/createContext";

export function useCartContext() {
  return useContext(cartContext);
}

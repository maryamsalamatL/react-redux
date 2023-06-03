import { BUY_CAKE } from "./cakeTypes";

export function buyCake(num) {
  return {
    type: BUY_CAKE,
    payload: num,
  };
}

import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { useState } from "react";

const CakeWithPayload = () => {
  const [numbers, setNumbers] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>num of cake :{numOfCakes}</h3>
      <input
        type="number"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(numbers))}>
        buy {numbers} cake
      </button>
    </div>
  );
};

export default CakeWithPayload;

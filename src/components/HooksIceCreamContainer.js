import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const HooksIceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>num of iceCream : {numOfIceCreams}</h3>
      <button onClick={() => dispatch(buyIceCream())}>buy IceCream</button>
    </div>
  );
};

export default HooksIceCreamContainer;

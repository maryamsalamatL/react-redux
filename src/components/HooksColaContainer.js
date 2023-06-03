import { useSelector, useDispatch } from "react-redux";
import { buyCola } from "../redux/cola/colaActions";

const HooksColaContainer = () => {
  const numOfCola = useSelector((state) => state.cola.numOfCola);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>num of cola: {numOfCola}</h3>
      <button onClick={() => dispatch(buyCola())}>buy cola</button>
    </div>
  );
};

export default HooksColaContainer;

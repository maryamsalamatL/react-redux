import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>num of cake :{numOfCakes}</h3>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;

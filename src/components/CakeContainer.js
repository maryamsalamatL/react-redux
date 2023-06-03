import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { useState } from "react";
const CakeContainer = (props) => {
  const { numOfCakes, buyCake } = props;
  const [numbers, setNumbers] = useState(1);
  return (
    <div>
      <h3>num of cake :{numOfCakes}</h3>
      <input
        type="number"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <button onClick={() => buyCake(numbers)}>buy cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (numbers) => dispatch(buyCake(numbers)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

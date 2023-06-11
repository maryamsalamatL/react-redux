import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HookCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import HooksColaContainer from "./components/HooksColaContainer";
import CakeWithPayload from "./components/CakeWithPayload";
import UserContainer from "./components/UserContainer";
import PostsSaga from "./components/PostsSaga";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <HooksCakeContainer />  */}
        {/* <CakeWithPayload />
        <HooksIceCreamContainer />
        <HooksColaContainer /> */}
        {/* <UserContainer /> */}
        <PostsSaga />
      </div>
    </Provider>
  );
}

export default App;

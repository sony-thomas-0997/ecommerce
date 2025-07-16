import "./App.css";
import { Provider } from "react-redux";
import store from "./redux_toolkit/store";
import { BrowserRouter } from "react-router";
 
import Navbarascomponentreactbootstarp from "./Components/NavbarComponentBootstarpReact";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="">
          <Navbarascomponentreactbootstarp/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

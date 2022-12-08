import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </Provider>
  );
}

export default App;

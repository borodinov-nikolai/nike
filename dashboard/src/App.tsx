import { Provider } from "react-redux";
import { store } from "./shared/store/store";
import Router from "./router";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div className="App">
      <ConfigProvider wave={{disabled: true}}>
      <Provider store={store}>
        <Router />
      </Provider>
      </ConfigProvider>
    </div>
  );
}

export default App;

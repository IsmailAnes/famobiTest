import {store} from './src/store/configStore';
import { AppStack } from "./navigation";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

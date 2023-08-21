import { Provider } from "react-redux";
import store from "./store/store";
import { DisputeTable } from "./components/DisputeTable";

function App() {
    return (
        <Provider store={store}>
            <DisputeTable />
        </Provider>
    );
}

export default App;

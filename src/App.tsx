import { Provider } from "react-redux";
import store from "./store/store";
import { DisputeTable } from "./components/DisputeTable";
import styled from "@emotion/styled";

const Container = styled.div`
    width: 900px;
    margin: 2rem auto;
`;

function App() {
    return (
        <Provider store={store}>
            <Container>
                <DisputeTable />
            </Container>
        </Provider>
    );
}

export default App;

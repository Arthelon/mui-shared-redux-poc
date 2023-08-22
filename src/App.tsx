import { Provider } from "react-redux";
import store from "./store/store";
import DisputeTable from "./components/DisputeTable";
import styled from "@emotion/styled";
import AddDisputeButton from "./components/AddDisputeButton";
import AddDisputeModal from "./components/AddDisputeModal";

const Container = styled.div`
    width: 900px;
    margin: 2rem auto;
`;

function App() {
    return (
        <Provider store={store}>
            <Container>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                    <h2>Material-UI Disputes</h2>
                    <span
                        style={{
                            color: "#808080",
                            marginLeft: "0.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        (using shared redux NPM module. Custom Config)
                    </span>
                </div>
                <DisputeTable />
                <AddDisputeButton />
                <AddDisputeModal />
            </Container>
        </Provider>
    );
}

export default App;

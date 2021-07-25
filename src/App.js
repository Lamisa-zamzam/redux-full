import "./App.css";
import logo from "./logo.svg";
import { connect } from "react-redux";
import Numbers from "./components/Numbers";
import * as actionCreator from "./redux/actions/ageActions";

function App(props) {
    // Props passed by redux
    const {
        age,
        handleAgeIncrement,
        handleAgeDecrement,
        history,
        handleHistoryItemDelete,
        loading,
    } = props;
    return (
        <div className="App">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                Age: <span>{age}</span>
            </div>
            <br />
            <br />
            <button onClick={handleAgeIncrement}>Make me older</button>
            <br />
            <br />
            <button onClick={handleAgeDecrement}>Make me younger</button>
            <br />
            <div>
                History:{" "}
                <ul>
                    {history.map((entity) => (
                        <li
                            key={entity.id}
                            onClick={() => handleHistoryItemDelete(entity.id)}
                        >
                            {entity.age}
                        </li>
                    ))}
                </ul>
            </div>
            {loading && <img src={logo} alt="logo" />}
            <Numbers />
        </div>
    );
}

// States in the redux store
const mapStateToProps = (state) => {
    return {
        age: state.rAge.age,
        history: state.rAge.history,
        loading: state.rAge.loading,
    };
};

// Dispatchers in the redux store
const mapDispatchToProps = (dispatch) => {
    return {
        // Use action creators imported to pass the state
        handleAgeIncrement: () => dispatch(actionCreator.ageIncrement(1)),
        handleAgeDecrement: () => dispatch(actionCreator.ageDecrement(1)),
        // Pass the state directly
        handleHistoryItemDelete: (id) =>
            dispatch({ type: "DEL_ITEM", key: id }),
    };
};

// Connect App component to the store and get the states
// and dispatchers
export default connect(mapStateToProps, mapDispatchToProps)(App);

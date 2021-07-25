import { connect } from "react-redux";

const Numbers = (props) => {
    // Props passed by redux
    const { a, b, updateA, updateB } = props;
    return (
        <div>
            <div>
                A: <span>{a}</span>
                <br />
                <button onClick={() => updateA(b)}>Update A</button>
            </div>

            <br />
            <br />
            <div>
                B: <span>{b}</span>
                <br />
                <button onClick={() => updateB(a)}>Update B</button>
            </div>
        </div>
    );
};

// States in the redux store
const mapStateToProps = (store) => {
    return {
        a: store.rA.a,
        b: store.rB.b,
    };
};

// Dispatchers in the redux store
const mapDispatchToProps = (dispatch) => {
    return {
        updateA: (b) => dispatch({ type: "UPDATE_A", b }),
        updateB: (a) => dispatch({ type: "UPDATE_B", a }),
    };
};

// Connect the Numbers component to the store and get the states
// and the dispatchers
export default connect(mapStateToProps, mapDispatchToProps)(Numbers);

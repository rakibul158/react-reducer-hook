import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            if(state <=0){
                return state;
            }
            return state - 1;
        default:
            return state;    
    }
}

const Home = () => {

    const[count, dispatch] =  useReducer(reducer, initialState)

    return (
        <div>
            <h4>Count: {count}</h4>
            <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
            <button onClick={() => dispatch("INCREMENT")}>Increment</button>
        </div>
    );
};

export default Home;
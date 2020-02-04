const redux = require('redux');


const REDUCER = {};

REDUCER.dummy = (state, action) => {
    console.log("DUMMRY WAS CALLED");
    return state + 1;
}


function reducer(state = 0, action) {
    debugger;
    if (action.type === "REDUCER"){
        return action.reducer(state);
    } else {
        return state;
    }
};

const store = redux.createStore(reducer);



exports.store = store;
exports.REDUCER = REDUCER;
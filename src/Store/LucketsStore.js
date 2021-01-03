const redux = require('redux');

const initialState = {
    signedIn: false,
    luckets: null,
    step: "Do",
    timeFrame: "Day",
    user: null,
    openDay: null,
};

const REDUCER = {};

REDUCER.dummy = (state, action) => {
    console.log("DUMMRY WAS CALLED");
    return state + 1;
}


REDUCER.setState = (state, action) => {
    console.log("DUMMRY WAS CALLED");
    return state + 1;
}


/*

      if (user !== null) {
        // HERE IS WHEN WE HAVE THE USER
        this.setState({ signedIn: user.I, user: user });
        // CALL GET DATA
        checkUser(user, this.setLuckets);
        getUserInfo(user,this.setUserInfo);
        getHistory(user,this.setHistory);
      } else {
        this.setState({ signedIn: false, user: null });
      }




 */

function reducer(state = initialState, action) {
    if (action.type === "REDUCER"){
        return action.reducer(state);
    } else {
        return state;
    }
};

const store = redux.createStore(reducer);



exports.store = store;
exports.REDUCER = REDUCER;
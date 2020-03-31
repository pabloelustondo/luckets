const thunkMiddleware = require( 'redux-thunk').default;
const { createLogger } = require('redux-logger');
const { createStore, applyMiddleware } = require('redux');
const loggerMiddleware = createLogger();

const { ASYNC_ACTION, ACTION, STORE_REDUCER, INITIAL_STATE } = require('./testing_redux_basics_todo_lib');


const store = createStore(STORE_REDUCER,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ));



store.subscribe(() => console.log(store.getState()))

store.dispatch(ACTION.addTodo({id:1, name:'mind', description:'plan day'}) );
store.dispatch(ACTION.addTodo({id:1, name:'body', description:'plan day'}) );
store.dispatch(ACTION.addTodo({id:1, name:'we', description:'plan day'}) );
store.dispatch(ASYNC_ACTION.realFetchPost("polandball") );


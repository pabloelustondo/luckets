const redux = require('redux');

const { ACTION_CREATOR, REDUCER, INITIAL_STATE } = require('./testing_redux_basics_todo_lib');


const store = redux.createStore(REDUCER);



store.subscribe(() => console.log(store.getState()))

store.dispatch(ACTION_CREATOR.addTodo({id:1, name:'mind', description:'plan day'}) );
store.dispatch(ACTION_CREATOR.addTodo({id:1, name:'body', description:'plan day'}) );
store.dispatch(ACTION_CREATOR.addTodo({id:1, name:'we', description:'plan day'}) );


const redux = require('redux');

const ACTION = {};

ACTION.ADD_TODO = "ADD_TODO";
ACTION.UPDATE_TODO = "UPDATE_TODO";
ACTION.DELETE_TODO = "DELETE_TODO";

const INITIAL_STATE = {
    todos: []
}

const REDUCER = {};

//ADD_TODO
REDUCER[ACTION.ADD_TODO] = (state, {id, name, description}) => {
    const newTodos = [...state.todos, {id, name,description}];
    return {todos:newTodos};
}


//UPDATE_TODO
REDUCER[ACTION.UPDATE_TODO] = (state, {id ,name, description}) => {
    const newTodos = state.todos.map(
        t => ( t.id===id ) ? {id ,name, description} : t
        );
    return {todos:newTodos};
}

//DELETE_TODO
REDUCER[ACTION.DELETE_TODO] = (state, {id ,name, description}) => {
    const newTodos = state.todos.map(
        t => ( t.id===id ) ? {id ,name, description} : t
    );
    return {todos:newTodos};
}



function STORE_REDUCER(state = INITIAL_STATE, action) {
    if (action.type in ACTION){
        return REDUCER[ACTION[action.type]](state,action);
    }else {
        return state;
    }

}

let store = redux.createStore(STORE_REDUCER)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: ACTION.ADD_TODO, id:1, name:'mind', description:'plan day'} );






module.exports = store;
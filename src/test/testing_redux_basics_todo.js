const redux = require('redux');

const ACTION = {};

ACTION.ADD_TODO = "ADD_TODO";
ACTION.UPDATE_TODO = "UPDATE_TODO";
ACTION.DELETE_TODO = "DELETE_TODO";

const INITIAL_STATE = {
    todos: []
}

const ACTION_REDUCER = {};

//ADD_TODO
ACTION_REDUCER[ACTION.ADD_TODO] = (state, {id, name, description}) => {
    const newTodos = [...state.todos, {id, name,description}];
    return {todos:newTodos};
}


//UPDATE_TODO
ACTION_REDUCER[ACTION.UPDATE_TODO] = (state, {id ,name, description}) => {
    const newTodos = state.todos.map(
        t => ( t.id===id ) ? {id ,name, description} : t
        );
    return {todos:newTodos};
}

//DELETE_TODO
ACTION_REDUCER[ACTION.DELETE_TODO] = (state, {id ,name, description}) => {
    const newTodos = state.todos.map(
        t => ( t.id===id ) ? {id ,name, description} : t
    );
    return {todos:newTodos};
}



function REDUCER(state = INITIAL_STATE, action) {
    if (action.type in ACTION){
        return ACTION_REDUCER[ACTION[action.type]](state,action.todo);
    }else {
        return state;
    }

}



let store = redux.createStore(REDUCER)

/*
store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: ACTION.ADD_TODO, id:1, name:'mind', description:'plan day'} );

*/




module.exports= { store, ACTION, REDUCER, INITIAL_STATE };

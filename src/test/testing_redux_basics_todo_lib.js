const ACTION_TYPE = {};

ACTION_TYPE.ADD_TODO = "ADD_TODO";
ACTION_TYPE.UPDATE_TODO = "UPDATE_TODO";
ACTION_TYPE.DELETE_TODO = "DELETE_TODO";

//FETCH POSTS

ACTION_TYPE.FETCH_POSTS = "FETCH_POSTS";
ACTION_TYPE.FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
ACTION_TYPE.FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

const INITIAL_STATE = {
    todos: []
}

const ACTION_REDUCER = {};
const ACTION_CREATOR = {};

//ADD_TODO

ACTION_CREATOR.addTodo = ({id, name, description}) => {
    return {
        type: ACTION_TYPE.ADD_TODO,
        todo: {id, name, description}
    }
}

ACTION_REDUCER[ACTION_TYPE.ADD_TODO] = (state, {id, name, description}) => {
    const newTodos = [...state.todos, {id, name,description}];
    return {todos:newTodos};
}


ACTION_CREATOR.updateTodo = ({id, name, description}) => {
    return {
        type: ACTION_TYPE.UPDATE_TODO,
        todo: {id, name, description}
    }
}
//UPDATE_TODO
ACTION_REDUCER[ACTION_TYPE.UPDATE_TODO] = (state, {id ,name, description}) => {
    const newTodos = state.todos.map(
        t => ( t.id===id ) ? {id ,name, description} : t
        );
    return {todos:newTodos};
}

//DELETE_TODO  -wrong make a failing unit test


ACTION_CREATOR.updateTodo = ({id, name, description}) => {
    return {
        type: ACTION_TYPE.UPDATE_TODO,
        todo: {id, name, description}
    }
}
ACTION_REDUCER[ACTION_TYPE.DELETE_TODO] = (state, {id ,name, description}) => {
    const newTodos = state.todos.map(
        t => ( t.id===id ) ? {id ,name, description} : t
    );
    return {todos:newTodos};
}


//FECTH POSTS

//ADD_TODO
ACTION_REDUCER[ACTION_TYPE.FETCH_POSTS] = (state, action) => {
    const newTodos = [...state.todos, {id, name,description}];
    return {todos:newTodos};
}




function REDUCER(state = INITIAL_STATE, action) {
    if (action.type in ACTION_TYPE){
        return ACTION_REDUCER[ACTION_TYPE[action.type]](state,action.todo);
    }else {
        return state;
    }

}




module.exports= { ACTION_CREATOR, REDUCER, INITIAL_STATE };

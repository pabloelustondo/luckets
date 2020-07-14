const fetch = require('cross-fetch')
const { createLogger } = require('redux-logger');
const { createStore, applyMiddleware } = require('redux');
const loggerMiddleware = createLogger();
const thunkMiddleware = require( 'redux-thunk').default;

const ACTION_TYPE = {};
ACTION_TYPE.UPDATE_TODO = "UPDATE_TODO";
ACTION_TYPE.DELETE_TODO = "DELETE_TODO";
ACTION_TYPE.FETCH_POSTS = "FETCH_POSTS";
ACTION_TYPE.FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
ACTION_TYPE.FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

const FETCH_STATUS = {};
FETCH_STATUS.fetching="Fetching";
FETCH_STATUS.fetchSuccess="FetchSuccess";
FETCH_STATUS.fetchError="FetchError";





const INITIAL_STATE = {
    todos: [],
    posts: [],
    reddit: null
}

const REDUCER = {};
const ACTION = {};
const ASYNC_ACTION = {};


REDUCER['addTodo'] = (state, {todo:{id, name, description}}) => {
    const newTodos = [...state.todos, {id, name,description}];
    return {todos:newTodos};
}

REDUCER['updateTodo'] = (state, {todo:{id ,name, description}}) => {
    const newTodos = state.todos.map(
        t => ( t.id===id ) ? {id ,name, description} : t
        );
    return {todos:newTodos};
}

REDUCER['deleteTodo'] = (state, {todo:{id} }) => {
    const newTodos = state.todos.filter( t => t.id !== id);
    return {todos:newTodos};
}


REDUCER['fetchPosts'] = (state, action) => {
    const newState = {...state, reddit: action.reddit };
    return newState;
}


REDUCER['fetchPostsSuccess'] = (state, action) => {
    const newReddit = {...state.reddit, status: action.reddit.status}
    const newState = {...state, reddit: newReddit, posts:action.posts };
    return newState;
}

ACTION.fetchPostsError = ( error ) => {
    return {
        type: ACTION_TYPE.FETCH_POSTS_ERROR,
        reddit: { status: FETCH_STATUS.fetchError, error: error }
    }
}
REDUCER[ACTION_TYPE.FETCH_POSTS_ERROR] = (state, action) => {
    const newReddit = {...state.reddit, status: action.reddit.status, error: action.reddit.error}
    const newState = {...state, reddit: newReddit };
    return newState;
}

class STORE {

    STORE_REDUCER(state = INITIAL_STATE, action) {
        if (['addTodo','updateTodo','deleteTodo','fetchPosts','fetchPostsSuccess'].includes(action.type) ){
            return REDUCER[action.type](state,action);
        }else {
            return state;
        }
    }

    constructor(_fetch) {
        this.fetch = _fetch || fetch;
        this.store =  createStore(this.STORE_REDUCER,
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            ));
    }

    dispatch( action ){
        return this.store.dispatch(action);
    }

    getState() {
        return this.store.getState();
    }

    addTodo = ({id, name, description}) => {
        const action = {
            type: 'addTodo',
            todo: {id, name, description}
        }
        return this.store.dispatch(action);
    }

    updateTodo = ({id, name, description}) => {
        const action = {
            type: 'updateTodo',
            todo: {id, name, description}
        }
        return this.store.dispatch(action);
    }

    deleteTodo = ({id}) => {
        const action = {
            type: 'deleteTodo',
            todo: {id }
        }
        return this.store.dispatch(action);
    }

    fetchPosts = ( redditId ) => {
        return this.dispatch({
            type: 'fetchPosts',
            reddit: { redditId: redditId, status: FETCH_STATUS.fetching }
        })
    }

    fetchPostsSuccess = ( posts ) => {
        return this.dispatch({
            type: 'fetchPostsSuccess',
            reddit: { status: FETCH_STATUS.fetchSuccess },
            posts: posts
        })
    }

    fetchPostsAsync = (redditId)=> {
        const action = (dispatch) => {
            this.fetchPosts(redditId);

            return this.fetch(`https://www.reddit.com/r/${redditId}.json`)
                .then(
                    response => response.json(),
                    error => console.log('An error occurred.', error)
                )
                .then(json =>
                    this.fetchPostsSuccess(redditId, json)
                )
        }
        return this.store.dispatch(action);
    }
}


module.exports= { STORE, ASYNC_ACTION, FETCH_STATUS, ACTION, INITIAL_STATE };

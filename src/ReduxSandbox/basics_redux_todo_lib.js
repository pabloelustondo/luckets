const fetch = require('cross-fetch');
const { createLogger } = require('redux-logger');
const { createStore, applyMiddleware } = require('redux');
const loggerMiddleware = createLogger();
const thunkMiddleware = require( 'redux-thunk').default;

const K = {};
K.fetching="Fetching";
K.fetchSuccess="FetchSuccess";
K.fetchError="FetchError";


const INITIAL_STATE = {
    todos: [],
    posts: [],
    reddit: null
}

class STORE {

    STORE_REDUCER = (state = INITIAL_STATE, action) => {
        if (Object.keys(this).includes(action.type) ){
            return this[action.type + "Reducer"](state,action);
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

/////////// ADD TOOO
    addTodo = ({id, name, description}) => {
        const action = {
            type: 'addTodo',
            todo: {id, name, description}
        }
        return this.store.dispatch(action);
    }
    addTodoReducer = (state, {todo:{id, name, description}}) => {
        const newTodos = [...state.todos, {id, name,description}];
        return {todos:newTodos};
    }

///////////// UPDATE TOOO
    updateTodo = ({id, name, description}) => {
        const action = {
            type: 'updateTodo',
            todo: {id, name, description}
        }
        return this.store.dispatch(action);
    }
    updateTodoReducer = (state, {todo:{id ,name, description}}) => {
        const newTodos = state.todos.map(
            t => ( t.id===id ) ? {id ,name, description} : t
        );
        return {todos:newTodos};
    }

//////////////  /DELETE TODO
    deleteTodo = ({id}) => {
        const action = {
            type: 'deleteTodo',
            todo: {id }
        }
        return this.store.dispatch(action);
    }
    deleteTodoReducer = (state, {todo:{id} }) => {
        const newTodos = state.todos.filter( t => t.id !== id);
        return {todos:newTodos};
    }

//////////////  FETCH POSTS
    fetchPosts = ( redditId ) => {
        return this.dispatch({
            type: 'fetchPosts',
            reddit: { redditId: redditId, status: K.fetching }
        })
    }
    fetchPostsReducer = (state, action) => {
        const newState = {...state, reddit: action.reddit };
        return newState;
    }
    fetchPostsSuccess = ( reditt, posts ) => {
        return this.dispatch({
            type: 'fetchPostsSuccess',
            reddit: { status: K.fetchSuccess },
            posts: posts
        })
    }
    fetchPostsSuccessReducer = (state, action) => {
        const newReddit = {...state.reddit, status: action.reddit.status}
        const newState = {...state, reddit: newReddit, posts:action.posts };
        return newState;
    }


    fetchPostsError = ( error ) => {
        return this.dispatch({
            type: 'fetchPostsError',
            reddit: { status: K.fetchError, error: error }
        })
    }
    fetchPostsErrorReducer = (state, action) => {
        const newReddit = {...state.reddit, status: action.reddit.status, error: action.reddit.error}
        const newState = {...state, reddit: newReddit };
        return newState;
    }

    fetchPostsAsync = (redditId)=> {
        return this.dispatch( (dispatch) => {

            this.fetchPosts(redditId);
            return this.fetch(`https://www.reddit.com/r/${redditId}.json`)
                .then(
                    response =>   response.json(),
                    error =>  this.fetchPostsError(error)
                )
                .then(fetchResult =>{
                    console.log(JSON.stringify(fetchResult,null,2));
                    if (fetchResult.error){
                        this.fetchPostsError(fetchResult.error);
                    }else{
                        this.fetchPostsSuccess(redditId, fetchResult.data.children)
                    }
                }
                )
        })
    }
}


module.exports= { STORE, CONSTANTS: K };

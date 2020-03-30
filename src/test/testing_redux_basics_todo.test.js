const { FETCH_STATUS, ACTION, STORE_REDUCER, INITIAL_STATE } = require('./testing_redux_basics_todo_lib');

describe('REDUCER', () => {

    const sampleTodo = { id:1, name:'mind', description:'keep your mind in control'};
    const sampleTodo2 = { id:2, name:'body', description:'keep your body in control'};
    const sampleTodo3 = { id:3, name:'we', description:'keep your loved ones in control'};

    beforeEach(() => {

    });

    it('should add a todo', () => {
        const state = { todos:[]};
        const action = ACTION.addTodo(sampleTodo);

        const newState = STORE_REDUCER( state , action);
        expect(newState.todos.length).toBe(1);
        expect(newState.todos[0].id).toBe(sampleTodo.id);
        expect(newState.todos[0].name).toBe(sampleTodo.name);
    })

    it('should update a todo', () => {
        const state = { todos:[sampleTodo, sampleTodo2]};
        const action = ACTION.updateTodo( { id:1, name:'body', description:'nice'} );

        const newState = STORE_REDUCER( state , action);
        expect(newState.todos.length).toBe(2);
        console.log(newState);
        const newTodo= newState.todos.filter( t => t.id===1)[0];
        expect(newTodo.name).toBe('body');
    })

    it('should delete a todo', () => {
        const state = { todos:[sampleTodo, sampleTodo2,sampleTodo3]};
        const action = ACTION.deleteTodo( { id:1 } );

        const newState = STORE_REDUCER( state , action);
        expect(newState.todos.length).toBe(2);
        console.log(newState);
        const remain = newState.todos.filter( t => t.id===1);
        expect(remain.length).toBe(0);
    })

    it('should fetch reddit posts', () => {
        const state = { todos:[sampleTodo, sampleTodo2,sampleTodo3]};
        const redditId = 1;
        const action = ACTION.fetchPosts( redditId );

        const newState = STORE_REDUCER( state , action);
        expect(newState.todos.length).toBe(3);
        console.log(newState);
        expect(newState.reddit.redditId).toBe(1);
        expect(newState.reddit.status).toBe(FETCH_STATUS.fetching);
    })

    it('should accept fetch post success post', () => {
        const state = { todos:[sampleTodo, sampleTodo2,sampleTodo3], reddit:{redditId: 1, status: FETCH_STATUS.fetching}};
        const posts = [{}, {}];
        const action = ACTION.fetchPostsSuccess( posts );

        const newState = STORE_REDUCER( state , action);
        expect(newState.todos.length).toBe(3);
        console.log(newState);
        expect(newState.reddit.redditId).toBe(1);
        expect(newState.reddit.status).toBe(FETCH_STATUS.fetchSuccess);
        expect(newState.posts.length).toBe(posts.length);
    })

    it('should accept fetch post error', () => {
        const state = { todos:[sampleTodo, sampleTodo2,sampleTodo3], reddit:{redditId: 1, status: FETCH_STATUS.fetching}};
        const error = "Error";
        const action = ACTION.fetchPostsError( error );

        const newState = STORE_REDUCER( state , action);
        expect(newState.todos.length).toBe(3);
        console.log(newState);
        expect(newState.reddit.redditId).toBe(1);
        expect(newState.reddit.status).toBe(FETCH_STATUS.fetchError);
        expect(newState.reddit.error).toBe(error);

    })
})
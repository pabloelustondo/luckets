const { STORE, ASYNC_ACTION, ACTION, CONSTANTS } = require('./basics_redux_todo_lib');
const sinon = require('sinon');
const fetchMock = require('fetch-mock');


describe('STORE', () => {

    const store = new STORE();

    const sampleTodo = { id:1, name:'mind', description:'keep your mind in control'};
    const sampleTodo2 = { id:2, name:'body', description:'keep your body in control'};
    const sampleTodo3 = { id:3, name:'we', description:'keep your loved ones in control'};

    beforeEach(() => {

    });

    afterEach(() => {
        // Restore the default sandbox here
        sinon.restore();
    });


    it('should add a todo', () => {
      //  store.dispatch(store.addTodo({id:1, name:'mind', description:'plan day'}) );
        store.addTodo({id:1, name:'mind', description:'plan day'});

        const newState = store.getState();
        expect(newState.todos.length).toBe(1);
        expect(newState.todos[0].id).toBe(sampleTodo.id);
        expect(newState.todos[0].name).toBe(sampleTodo.name);
    })

    it('should update a todo', () => {
        store.updateTodo({id:1, name:'mind', description:'plan day better'});
        const newState = store.getState();
        expect(newState.todos.length).toBe(1);
        expect(newState.todos[0].description).toBe('plan day better');
    })

    it('should delete a todo', () => {
        store.deleteTodo({id:1});
        const newState = store.getState();
        expect(newState.todos.length).toBe(0);
    })

    it('should fetch reddit posts asynchronously ', async () => {
        await store.fetchPostsAsync("polandball");
        const newState = store.getState();
        expect(newState.posts.length).toBe(27);
    })

    it('should fetch reddit posts asynchronously ', async () => {
        const redditId = `polandball`;
        fetchMock.mock(`https://www.reddit.com/r/${redditId}.json`,{});
        await store.fetchPostsAsync("polandball");
        const newState = store.getState();
        expect(newState.posts.length).toBe(27);
    })

    it('should manage errors from fetch reddit posts asynchronously ', async () => {
        await store.fetchPostsAsync("^&^&^&^&^&^&^&");
        const newState = store.getState();
        expect(newState.reddit.status).toBe(CONSTANTS.fetchError);
    })

    it('fetches using mock ', async () => {
        fetchMock.mock('http://example.com', {status:200, body:{name:'john'}});
        const res = await fetch('http://example.com');
        fetchMock.restore();
    })

    it('should fetch reddit posts asynchronously ', async () => {
        const redditId = `polandball`;
        fetchMock.mock(`https://www.reddit.com/r/${redditId}.json`, {status:200, body:{name:'john'}});
        store.fetch = fetch;
        await store.fetchPostsAsync("polandball");
        const newState = store.getState();
        expect(newState.posts.length).toBe(27);
    })


})
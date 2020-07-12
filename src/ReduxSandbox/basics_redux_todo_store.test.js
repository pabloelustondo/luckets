const { STORE, ASYNC_ACTION, ACTION } = require('./basics_redux_todo_lib');

describe('STORE', () => {

    const store = new STORE();

    const sampleTodo = { id:1, name:'mind', description:'keep your mind in control'};
    const sampleTodo2 = { id:2, name:'body', description:'keep your body in control'};
    const sampleTodo3 = { id:3, name:'we', description:'keep your loved ones in control'};

    beforeEach(() => {

    });

    it('should add a todo', () => {
        store.dispatch(store.addTodo({id:1, name:'mind', description:'plan day'}) );
        const newState = store.getState();
        expect(newState.todos.length).toBe(1);
        expect(newState.todos[0].id).toBe(sampleTodo.id);
        expect(newState.todos[0].name).toBe(sampleTodo.name);
    })

    it('should update a todo', () => {
        store.dispatch(ACTION.updateTodo({id:1, name:'mind', description:'plan day better'}) );
        const newState = store.getState();
        expect(newState.todos.length).toBe(1);
        expect(newState.todos[0].description).toBe('plan day better');
    })

    it('should delete a todo', () => {
        store.dispatch(ACTION.deleteTodo({id:1}) );
        const newState = store.getState();
        expect(newState.todos.length).toBe(0);
    })

    it('should fetch reddit posts', async () => {
        await store.dispatch(ASYNC_ACTION.realFetchPost("polandball") );
        const newState = store.getState();
        expect(newState.posts.length).toBe(10);
    })
})
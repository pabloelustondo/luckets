const { store, ACTION, REDUCER, INITIAL_STATE } = require('./testing_redux_basics_todo');

describe('REDUCER', () => {

    const sampleTodo = { id:1, name:'mind', description:'keep your mind in control'};

    beforeEach(() => {

    });

    it('should add a todo', () => {
        const state = { todos:[]};
        const action = {type:ACTION.ADD_TODO, todo:sampleTodo};

        const newState = REDUCER( state , action);
        expect(newState.todos.length).toBe(1);
    })

    it('should update a todo', () => {
        const state = { todos:[sampleTodo]};
        const action = {type:ACTION.UPDATE_TODO, todo:{ id:1, name:'body', description:'nice'}};

        const newState = REDUCER( state , action);
        expect(newState.todos.length).toBe(1);
        console.log(newState);
        expect(newState.todos[0].name).toBe('body');
    })
})
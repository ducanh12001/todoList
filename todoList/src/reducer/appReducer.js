const initialState = {
    tasks: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'DELETE':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case 'CLEAR':
            return {
                tasks: [],
            }
        default:
            return state;
    }
}
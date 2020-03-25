

const reducer = (state = {
    name: 'Bilal',
    wish: ['Player', 'Developer']
}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME': {
            return {
                ...state,
                name: action.payload
            }
           
        }
        default:
            return state
    }
    
}

export default reducer
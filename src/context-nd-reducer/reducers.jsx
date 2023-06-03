export const initialState = {
    products: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                products: action.payload
            }
        case "REMOVE":
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export default reducer
import initialState from '../data/data.js';

const reducer = (state = initialState, action) => {
    const newState = {...state};
    const {type, payload} = action
    switch (type) {
        case "SELECTED_EQUIPMENT":
            {
                return {
                    ...state,
                    selectedEquiment: payload
                }
            }
        default:
            return newState;
    }
}
export default reducer;

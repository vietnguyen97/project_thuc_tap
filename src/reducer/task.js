import * as types from './../contant/ActionType';
var initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            state = action.key;
            return [...state];
        case types.LIST_KEY:
            state = action.keyword;
            return[...state];
        default: return [...state];
    }
};
export default myReducer;
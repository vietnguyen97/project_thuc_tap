import * as types from './../contant/ActionType';
var initialState = {
    taskPagination: []
};
const myReducer = (state = initialState, action) => {
    console.log(action.key);
    switch (action.type) {
        case types.GET_ALL_LIST:
            state = action.key;
            return {...state, taskPagination: action.key};
        default: return  {...state};
    }
};
export default myReducer;
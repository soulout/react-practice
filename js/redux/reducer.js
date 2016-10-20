import {setArrayCookie} from '../tools/controlCookies';

function reducer(state = {}, action) {
    var newState;
    switch (action.type) {
        case 'ADD_NEW_DATA':
            let newData = {
                name: state.text,
                checked: false
            };
            newState = Object.assign({}, state, {text: "", list: state.list.concat(newData)});
            setArrayCookie('todoList', newState.list);
            return newState;
        case 'RM_DATA':
            newState = Object.assign({}, state, {list: state.list.concat()});
            newState.list.splice(action.key + 0, 1);
            setArrayCookie('todoList', newState.list);
            return newState;
        case 'INPUT_CHANGE':
            return Object.assign({}, state, {text: action.text});
        case 'CHANGE_STATUS':
            newState = Object.assign({}, state, {list: state.list.concat()});
            newState.list[action.key]={...newState.list[action.key],checked : !newState.list[action.key].checked } ;
            setArrayCookie('todoList', newState.list);
            return newState;
        default:
            return state;
    }
}

export  default reducer;
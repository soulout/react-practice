/**
 * Created by xtong on 16/9/20.
 */
import { createStore, combineReducers } from "redux";

const nameReducer = function(state = "", action) {
    if(action.type == "NAME_WITH_ADD"){
        return action.name + "+"
    }else if(action.type == "NAME_WITH_MINUS"){
        return action.name + "-"
    }else{
        return state
    }
};

const listReducer = function(state = [], action) {
    if(action.type == "POP"){
        return [...state.slice(0, state.length-1)];
    }else if(action.type == "PUSH"){
        return state.concat(action.num)
    }else{
        return state
    }
};

const reducer = combineReducers({
    name : nameReducer,
    list : listReducer
});

const initialState = {name : "Will", list: [1,2,3]};

const store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension());


store.subscribe(() => {
    console.log( store.getState())
});

store.dispatch({type:"NAME_WITH_ADD", name:"REA"});
store.dispatch({type:"NAME_WITH_MINUS", name:"RESI"});
store.dispatch({type:"POP"});
store.dispatch({type:"PUSH", num:4});

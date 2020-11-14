import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof reducers>


//@ts-ignore
window.store = store;

export default store;
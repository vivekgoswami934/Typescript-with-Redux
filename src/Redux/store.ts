import { legacy_createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";


import { ArticleAction, ArticleState, DispatchType } from "../constraints/type";
import reducer from "./reducer";



export const store: Store<ArticleState, ArticleAction> & { dispatch: DispatchType } = legacy_createStore(reducer, applyMiddleware(thunk));
